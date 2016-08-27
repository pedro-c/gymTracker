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
    for(var i=0; i<this.exercisesFactory.getExercises().length;i++){
      if(this.exercisesFactory.getExercises()[i].getName()==exerciseName){
        var exerciseId=this.exercisesFactory.getExercises()[i].getId();
        this.navController.push(ExercisesDetailsPage, { exerciseId });
      }

    }

  }
  addExercise(exerciseName: string){
    console.log('2');
    var foundExercise=0;
    var repeatedExercise=0;
    for(var i=0; i<this.exercisesFactory.getExercises().length;i++){
        if(this.exercisesFactory.getExercises()[i].getName()==exerciseName)
          foundExercise=1;
    }
    for(var j=0; j<this.exercises.length;j++){
      if(this.exercises[j]==exerciseName){
        repeatedExercise=1;
/*
        let alert = Alert.create({
          title: 'Exercise with the same name!',
          subTitle: '',
          buttons: [{
            text: 'OK',
            handler: data => {
            }
          }]
        });
        this.navController.present(alert);
*/
// TODO: Fix alert
      }
    }
    if(repeatedExercise==0){
      this.exercises.push(exerciseName);
      if(foundExercise==0){
        this.exercisesFactory.addExercise(exerciseName);
      }
    }
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
            this.addExercise(data.exerciseName);
          }
        }
      ]
    });
    this.navController.present(prompt);
  }
}
