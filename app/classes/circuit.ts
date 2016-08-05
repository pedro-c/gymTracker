import {Exercise} from '../classes/exercise';

export class Circuit {
  private name: string;
  private id: number;
  private static nextId: number = 0;
  private exercises: string[]=[];

  constructor(name: string) {
    this.name = name;
    this.id = Circuit.nextId;
    Circuit.nextId++;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getExercises(): string[]{
    return this.exercises;
  }

  public getExerciseName(i: number): string{
    return this.exercises[i];
  }

  public addExercise(exerciseName: string){
    this.exercises.push(exerciseName);
  }
}
