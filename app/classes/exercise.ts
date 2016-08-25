export class Exercise {
  private lastValue: number;
  private avg: number;
  private name: string;
  private counter: number;
  private id: number;
  private static nextId: number = 0;
  private records: number[]=[0,0,1,2,3];

  constructor(name: string, lastValue: number) {
    this.name = name;
    this.lastValue = lastValue;
    this.avg = this.calcAvg();
    this.id = Exercise.nextId;
    Exercise.nextId++;
  }

  public setLastValue(value: number) {
    this.lastValue = value;
    this.records.push(value);
    this.avg = this.calcAvg();
  }

  public calcAvg(): number{

    var count=0;
    for (var i=0; i<this.records.length;i++){
      count+=parseInt( this.records[i].toString(), 10 );
    }
    var avg=(count/this.records.length);
    return Math.round(avg);
  }

  public getId(): number {
    return this.id;
  }

  public getLastRecord(): number {
    return this.lastValue;
  }

  public getAvg(): number {
    return this.avg;
  }

  public getName(): string {
    return this.name;
  }

  public getRecords(): number[]{
    return this.records;
  }



}
