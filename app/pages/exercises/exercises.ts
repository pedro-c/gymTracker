import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ExercisesDetailsPage} from '../exerciseDetails/exerciseDetails';
import {Exercise} from '../../classes/exercise';
import {ExercisesFactory} from '../../services/exercisesFactory';

@Component({
  templateUrl: 'build/pages/exercises/exercises.html'
})
export class ExercisesPage {
  private exercises: Exercise[]=[
    new Exercise('Pesos', 20),
    new Exercise('Pesos', 20)
  ];

  constructor(private navController: NavController, private exercisesFactory: ExercisesFactory) {
      //this.exercises = this.exercisesFactory.getExercises();
  }

  openExerciseDetails(exercise : Exercise) {
    this.navController.push(ExercisesDetailsPage, {
      exerciseId : exercise.getId()
    });
  }

  getExerciseById(id: number) : Exercise{
    return this.exercises[id];
  }


}
