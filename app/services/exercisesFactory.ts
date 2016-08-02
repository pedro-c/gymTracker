import {Injectable} from '@angular/core';
import {Exercise} from '../classes/exercise';

@Injectable()
export class ExercisesFactory {
  private static exercises: Exercise[]=[
    new Exercise('Pesos1', 0),
    new Exercise('Pesos2', 0),
    new Exercise('Pesos3', 0),
    new Exercise('Pesos4', 0)
  ];

  constructor() {

  }

  public getExerciseById(id) {
    return ExercisesFactory.exercises[id];
  };

  public getExercises() : Exercise[]{
    return ExercisesFactory.exercises;
  }

  public addExercise(name: string){
    ExercisesFactory.exercises.push(new Exercise(name, 0));
  }


}
