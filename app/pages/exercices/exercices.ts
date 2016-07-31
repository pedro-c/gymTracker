import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ExercicesDetailsPage} from '../exerciceDetails/exerciceDetails';
import {Exercice} from '../../Classes/exercice';

@Component({
  templateUrl: 'build/pages/exercices/exercices.html'
})
export class ExercicesPage {
  private exercices: Array<Exercice> = [];



  constructor(private navCtrl: NavController) {
      this.exercices.push(new Exercice('Pesos', 20));
      this.exercices.push(new Exercice('Pesos', 20));

  }

  openExerciceDetails(exercice : Exercice) {
    this.navCtrl.push(ExercicesDetailsPage, {
      exerciceId : exercice.getId()
    });
  }

  getExerciceById(id: number) : Exercice{
    return this.exercices[id];
  }


}
