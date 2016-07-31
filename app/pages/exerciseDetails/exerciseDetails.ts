import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ExercisesPage} from '../exercises/exercises';

@Component({
  templateUrl: 'build/pages/exerciseDetails/exerciseDetails.html'
})
export class ExercisesDetailsPage {
  private exercise : any;

  constructor(private navController : NavController, private navParams : NavParams,
              private e : ExercisesPage) {
     this.exercise = e.getExerciseById(navParams.get('exerciceId'));
  }
}
