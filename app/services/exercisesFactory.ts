import {Injectable} from '@angular/core';
import {Exercise} from '../classes/exercise';

@Injectable()
export class ExercisesFactory {
  private exercises: Exercise[]=[
    new Exercise('Pesos1', 20),
    new Exercise('Pesos2', 20),
    new Exercise('Pesos3', 20),
    new Exercise('Pesos4', 20)
  ];

  constructor() {

  }

  public getExerciseById(id) {
    return this.exercises[id];
  };

  public getExercises() : Exercise[]{
    return this.exercises;
  }

  public addExercise(name: string){
    this.exercises.push(new Exercise(name, 0));
  }


}
