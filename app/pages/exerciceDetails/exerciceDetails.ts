import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ExercicesPage} from '../exercices/exercices';

@Component({
  templateUrl: 'build/pages/exerciceDetails/exerciceDetails.html'
})
export class ExercicesDetailsPage {
  private exercice : any;
  constructor(private navController : NavController, private navParams : NavParams,
              private e : ExercicesPage) {
     this.exercice = e.getExerciceById(navParams.get('exerciceId'));
  }
}
