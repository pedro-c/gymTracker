import {Exercise} from '../classes/exercise';

export class Circuit {
  private name: string;
  private id: number;
  private static nextId: number = 0;
  private exercises: Exercise[]=[];

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

  public getExercises(): Exercise[]{
    return this.exercises;
  }

}
