import {ExercicesPage} from '../pages/exercices/exercices';

export class Exercice {
  private lastValue: number;
  private avg: number;
  private name: string;
  private counter: number;
  private id: number;
  private static nextId: number = 0;

  constructor(name: string, lastValue: number) {
    this.name = name;
    this.lastValue = lastValue;
    this.avg = 0;
    this.counter = 0;
    this.id = Exercice.nextId;
    Exercice.nextId++;
  }

  public setLastValue(value: number) {
    this.lastValue = value;
    this.counter++;
    this.avg = (this.avg * (this.counter - 1) + value) / this.counter;
  }

  public getId(): number {
    return this.id;
  }

  public getLastValue(): number {
    return this.lastValue;
  }

  public getAvg(): number {
    return this.avg;
  }

  public getName(): string {
    return this.name;
  }



}
