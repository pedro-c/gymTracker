import {Component} from '@angular/core';
import {Alert, NavController, NavParams} from 'ionic-angular';
import {ExercisesPage} from '../exercises/exercises';
import {ExercisesFactory} from '../../services/exercisesFactory';
import {CircuitsFactory} from '../../services/circuitsFactory';

@Component({
  templateUrl: 'build/pages/exerciseDetails/exerciseDetails.html',
  providers: [ExercisesFactory, CircuitsFactory]
})
export class ExercisesDetailsPage {
  private exercise : any;
  private records: number[]=[];

  constructor(private navController : NavController, private navParams : NavParams,
              private exercisesFactory : ExercisesFactory, private circuitsFactory : CircuitsFactory) {
     this.exercise = exercisesFactory.getExerciseById(navParams.get('exerciseId'));
     this.records = exercisesFactory.getExerciseById(navParams.get('exerciseId')).getRecords();
  }

// BUG not deleting properly
  deleteRecord(record: number){
      this.records.splice(this.records.indexOf(record),1);
  }

  deleteExercise(exerciseId: number){
      for(var i=0; i<this.exercisesFactory.getExercises().length;i++){
        if(this.exercisesFactory.getExercises()[i].getId()==exerciseId){
            this.circuitsFactory.removeExerciseFromCircuits(this.exercisesFactory.getExercises()[i].getName());
        }
      }
      this.exercisesFactory.removeExerciseById(exerciseId);
      this.navController.popToRoot();
  }

  doPrompt() {
    let prompt = Alert.create({
      title: '',
      message: "",
      inputs: [
        {
          type: 'number',
          name: 'record',
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
            this.exercise.setLastValue(data.record);
          }
        }
      ]
    });
    this.navController.present(prompt);
  }
}
