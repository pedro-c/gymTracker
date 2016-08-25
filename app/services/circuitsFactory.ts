import {Injectable} from '@angular/core';
import {Exercise} from '../classes/exercise';
import {Circuit} from '../classes/circuit';

@Injectable()
export class CircuitsFactory {
  private static circuits: Circuit[]=[
    new Circuit('Leg Day'),
    new Circuit('Back')
  ];

  constructor() {
  }

  public getCircuits() : Circuit[]{
    return CircuitsFactory.circuits;
  }

  public getCircuitById(id: number) {
    return CircuitsFactory.circuits[id];
  }

  public removeCircuitById(id: number){
    for(var i=0; i<CircuitsFactory.circuits.length; i++){
        if(CircuitsFactory.circuits[i].getId()==id)
          CircuitsFactory.circuits.splice(i,1);
    }
  }

  public removeExerciseFromCircuits(name: string){
    for(var i=0; i<CircuitsFactory.circuits.length; i++){
        for(var j=0; j<CircuitsFactory.circuits[i].getExercises().length;j++){
          if(CircuitsFactory.circuits[i].getExercises()[j]==name){
              CircuitsFactory.circuits[i].removeExercise(name);
          }
        }

      }
    }


}
