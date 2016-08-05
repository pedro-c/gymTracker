import {Component} from '@angular/core';
import {Alert, NavController, NavParams} from 'ionic-angular';
import {Exercise} from '../../classes/exercise';
import {CircuitsPage} from '../circuits/circuits';
import {CircuitsFactory} from '../../services/circuitsFactory';
import {ExercisesFactory} from '../../services/exercisesFactory';
import {ExercisesDetailsPage} from '../exerciseDetails/exerciseDetails';


@Component({
  templateUrl: 'build/pages/circuitDetails/circuitDetails.html',
  providers: [CircuitsFactory, ExercisesFactory]
})
export class CircuitsDetailsPage {
  private circuit : any;
  private exercises: string[]=[];

  constructor(private navController : NavController, private navParams : NavParams,
              private circuitsFactory : CircuitsFactory, private exercisesFactory : ExercisesFactory) {
     this.circuit = circuitsFactory.getCircuitById(navParams.get('circuitId'));
     this.exercises = circuitsFactory.getCircuitById(navParams.get('circuitId')).getExercises();
  }

  deleteExercise(exerciseName: string){
      for(var i=0; i<this.exercises.length;i++){
        if(exerciseName=this.exercises[i])
          this.exercises.splice(i,1);
      }
  }

  deleteCircuit(circuitId: number){
      this.circuitsFactory.removeCircuitById(circuitId);
      this.navController.popToRoot();
  }

  openExerciseDetails(exerciseName : string) {
    var exerciseId=0;
    for(var i=0; i<this.exercisesFactory.getExercises().length;i++){
      if(this.exercisesFactory.getExercises()[i].getName()==exerciseName)
      this.navController.push(ExercisesDetailsPage, { exerciseId
      });
    }

  }
  addExercise(exerciseName: string){
    var foundExercise=0;
    for(var i=0; i<this.exercisesFactory.getExercises().length;i++){
        if(this.exercisesFactory.getExercises()[i].getName()==exerciseName)
          foundExercise=1;
    }
    if(foundExercise==0){
      this.exercisesFactory.addExercise(exerciseName);
    }
    this.exercises.push(exerciseName);
  }

  doPrompt() {
    let prompt = Alert.create({
      title: '',
      message: "",
      inputs: [
        {
          type: 'string',
          name: 'exerciseName',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.circuit.addExercise(data.exerciseName);
          }
        }
      ]
    });
    this.navController.present(prompt);
  }
}
