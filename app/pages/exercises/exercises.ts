import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
import {ExercisesDetailsPage} from '../exerciseDetails/exerciseDetails';
import {Exercise} from '../../classes/exercise';
import {ExercisesFactory} from '../../services/exercisesFactory';


@Component({
  templateUrl: 'build/pages/exercises/exercises.html',
  providers: [ExercisesFactory]
})
export class ExercisesPage {
  private exercises: Exercise[];

  constructor(private navController: NavController, private exercisesFactory: ExercisesFactory) {
      this.exercises = this.exercisesFactory.getExercises();
  }

  openExerciseDetails(exercise : Exercise) {
    this.exercises = this.exercisesFactory.getExercises();
    this.navController.push(ExercisesDetailsPage, {
      exerciseId : exercise.getId()
    });
  }

  getExerciseById(id: number) : Exercise{
    this.exercises = this.exercisesFactory.getExercises();
    for(var i =0; i<this.exercises.length;i++){
      if(this.exercises[i].getId()==id)
        return this.exercises[i];
    }
  }




  doPrompt() {
    let prompt = Alert.create({
      title: 'New Exercise',
      message: "",
      inputs: [
        {
          name: 'exerciseName',
          placeholder: 'Exercise Name'
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
            this.exercisesFactory.addExercise(data.exerciseName);
          }
        }
      ]
    });
    this.navController.present(prompt);
  }


}
