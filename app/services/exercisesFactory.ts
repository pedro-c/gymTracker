import {Injectable} from '@angular/core';
import {Exercise} from '../classes/exercise';

@Injectable()
export class ExercisesFactory {
  private exercises: Exercise[]=[
    new Exercise('Pesos', 20),
    new Exercise('Pesos', 20)
  ];

  constructor() {

  }

  public getExerciseById(id) {
    return this.exercises[id];
  };

  public getExercises() : Exercise[]{
    return this.exercises;
  }


}
