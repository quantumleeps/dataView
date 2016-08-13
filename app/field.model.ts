export class FieldModel {

  skip:boolean = false;
  rangeOverride:boolean = false;
  timestamp:string;
  valid:boolean = false;
  processValue:number = null;

  constructor(
      private processID:string = "",
      private description:string = "",
      private units:string = "",
      public equipmentID:string = "",
      public validRange?:number[]
  ) {}

}
