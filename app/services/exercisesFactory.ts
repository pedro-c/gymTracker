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

  public getExercises() : Exercise[]{
    return ExercisesFactory.exercises;
  }


    public addExercise(name: string){
      ExercisesFactory.exercises.push(new Exercise(name, 0));
    }
    
  public getExerciseById(id: number) {
    return ExercisesFactory.exercises[id];
  }

  public removeExerciseById(id: number){
    for(var i=0; i<ExercisesFactory.exercises.length; i++){
        if(ExercisesFactory.exercises[i].getId()==id)
          ExercisesFactory.exercises.splice(i,1);
    }
  }





}
