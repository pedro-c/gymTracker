import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ExercisesPage} from '../exercises/exercises';
import {ExercisesFactory} from '../../services/exercisesFactory';

@Component({
  templateUrl: 'build/pages/exerciseDetails/exerciseDetails.html',
  providers: [ExercisesFactory]
})
export class ExercisesDetailsPage {
  private exercise : any;

  constructor(private navController : NavController, private navParams : NavParams,
              private exercisesFactory : ExercisesFactory) {
     this.exercise = exercisesFactory.getExerciseById(navParams.get('exerciseId'));
  }
}
