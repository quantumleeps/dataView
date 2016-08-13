import { Component, OnInit } from '@angular/core';
import { FieldDataService } from './field-data.service';
import { FieldModel } from './field.model';

@Component({
    selector: 'field-block',
    providers: [FieldDataService],
    template: `
    <!--<input type="checkbox" [(ngModel)]="testing"> Test Mode Active-->
    <div class="top-spacer">&nbsp</div>
    <div *ngFor="let field of fieldDataService.fieldData" id="field-wrapper">
        <div id="description">
          {{field.description}}
        </div>
        <span>
        </span>
      <div class="input-group field-input">
        <input class="form-control" id="value-input" type="number"
        [(ngModel)]="field.processValue"
        (keyup)="onKey(field)"
        [disabled]="field.skip"
        [class.valid-input]="field.valid">
        <div class="input-group-addon units">{{field.units}}</div>
      </div>
      <div id="field-options">
        <a id="skip-text" (click)="skipToggle(field)">
        <span class="glyphicon"
        [class.glyphicon-unchecked]="!field.skip"
        [class.glyphicon-check]="field.skip"></span>Skip</a>
        <a id="override-text"
        [hidden]="field.validRange == undefined"
        (click)="rangeOverrideToggle(field)">
        <span class="glyphicon"
        [class.glyphicon-unchecked]="!field.rangeOverride"
        [class.glyphicon-check]="field.rangeOverride"></span>Range Override</a>
      </div>
      <div class="field-footer" [hidden]="!field.valid"><label>Timestamp:</label> {{field.timestamp}}</div>
      <div [hidden]="!testing">
        <label>skip: </label>{{field.skip}}<br>
        <label>rangeOverride: </label>{{field.rangeOverride}}<br>
        <label>timestamp: </label>{{field.timestamp}}<br>
        <label>valid: </label>{{field.valid}}<br>
        <label>equipmentID: </label>{{field.equipmentID}}<br>
        <label>processValue: </label>{{field.processValue}}<br>
        <label>validRange: </label>{{field.validRange}}<br>
        <label>lowRange: </label>{{lowRange}}<br>
        <label>highRange: </label>{{highRange}}<br>
      </div>
    </div>
    `,
    styles: [`
      .top-spacer {
        height: 50px;
      }
      .valid-input {
        border: solid 3px green;
        border-radius: 5px;
      }

      .greyed {
        background-color: #e6e6e6;
        color: white;
      }

      #field-wrapper {
        margin-top: 30px;
      }

      .field-footer {
        font-size: 15px
      }

      .units {
        font-size: 30px
      }

      input {
        font-size: 60px
      }

      #value-input {
        height: 100px
      }

      #description {
        font-size: 30px;
      }

      #field-options {
        text-align: left;
      }

      #skip-text {
        color: black;
        margin-right: 4px;
        padding: 5px;
        font-size: 16px;
      }

      #override-text {
        color: black;
        padding: 5px;
        font-size: 16px;
      }
      `]
})

export class FieldBlockComponent implements OnInit {

  curDate:string;
  testing:boolean = false;
  lowRange:number;
  highRange:number;

  constructor(
    public fieldDataService: FieldDataService) {}

  ngOnInit():void {
    this.curDate = Date();
  }

  onKey(value:FieldModel):void {
    this.isValid(value);
    this.setRange(value);
    value.timestamp = Date();
  }

  setRange(value:FieldModel):void {
    if(value.validRange !== undefined) {
      this.lowRange = value.validRange[0];
      this.highRange = value.validRange[1];
    }
  }

  skipToggle(value:FieldModel):void {
    if (value.skip == true) {value.skip = false}
    else {value.skip = true}
  }

  rangeOverrideToggle(value:FieldModel):void {
    if (value.rangeOverride == true) {value.rangeOverride = false}
    else {value.rangeOverride = true}
    this.isValid(value)
  }

  isValid(value:FieldModel):void {

    if(value.processValue == null) {value.valid = false}
    else if(value.validRange == undefined || value.rangeOverride == true){value.valid = true}
    else {
        if(value.processValue >= value.validRange[0] && value.processValue <= value.validRange[1]) {
          value.valid = true
        }
        else {
          value.valid = false
        }
    }
  }

}
