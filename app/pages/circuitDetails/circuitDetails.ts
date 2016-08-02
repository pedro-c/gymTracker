import {Component} from '@angular/core';
import {Alert, NavController, NavParams} from 'ionic-angular';
import {Exercise} from '../../classes/exercise';
import {CircuitsPage} from '../circuits/circuits';
import {CircuitsFactory} from '../../services/circuitsFactory';

@Component({
  templateUrl: 'build/pages/circuitDetails/circuitDetails.html',
  providers: [CircuitsFactory]
})
export class CircuitsDetailsPage {
  private circuit : any;
  private exercises: Exercise[]=[];

  constructor(private navController : NavController, private navParams : NavParams,
              private circuitsFactory : CircuitsFactory) {
     this.circuit = circuitsFactory.getCircuitById(navParams.get('circuitId'));
     this.exercises = circuitsFactory.getCircuitById(navParams.get('circuitId')).getExercises();
  }

  deleteExercise(exerciseId: number){
      for(var i=0; i<this.exercises.length;i++){
        if(exerciseId=this.exercises[i].getId())
          this.exercises.splice(i,1);
      }
  }

  deletecircuit(circuitId: number){
      this.circuitsFactory.removeCircuitById(circuitId);
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
            this.circuit.setLastValue(data.record);
          }
        }
      ]
    });
    this.navController.present(prompt);
  }
}
