import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
import {CircuitsDetailsPage} from '../circuitDetails/circuitDetails';
import {Exercise} from '../../classes/exercise';
import {Circuit} from '../../classes/circuit';
import {CircuitsFactory} from '../../services/circuitsFactory';


@Component({
  templateUrl: 'build/pages/circuits/circuits.html',
  providers: [CircuitsFactory]
})
export class CircuitsPage {
  private circuits: Circuit[];

  constructor(private navController: NavController, private circuitsFactory: CircuitsFactory) {
      this.circuits = this.circuitsFactory.getCircuits();
  }

  openCircuitDetails(circuit : Circuit) {
    this.circuits = this.circuitsFactory.getCircuits();
    this.navController.push(CircuitsDetailsPage, {
      circuitId : circuit.getId()
    });
  }

  //TODO update deleted exercises in the ciruits details view into circuits
  ionViewWillEnter() : void {
      this.circuits = this.circuitsFactory.getCircuits();
  }

  doPrompt() {
    let prompt = Alert.create({
      title: 'New Circuit',
      message: "",
      inputs: [
        {
          name: 'circuitName',
          placeholder: 'Circuit Name'
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
            this.circuits.push(new Circuit(data.circuitName));
          }
        }
      ]
    });
    this.navController.present(prompt);
  }


}
