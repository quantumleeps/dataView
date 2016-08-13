import { Component, OnInit } from '@angular/core';
import { FieldDataService } from './field-data.service'

@Component({
    selector: 'header-block',
    providers: [FieldDataService],
    template: `
    <h1>Blue Hills Data Entry</h1>
    <div class="button-block">
      <button>Pretreatment</button>
      <button class="btn btn-success">Train 1</button>
      <button class="btn">Train 2</button>
      <button>Train 3</button>
      <button>Train 4</button>
      <button>Train 5</button>
      <button>Train 6</button>
      <button>Post Treatment</button>
      <button>Product Transfer</button>
    </div>
    `,
    styles: [`

      .button-block {
        text-align: center;
        margin: 5px;
      }

      button {
        margin-left: 8px;
        margin-right: 8px
        font-size: 12px;
      }

      h1 {
        margin-bottom: 20px;
      }

      `]
})

export class HeaderBlockComponent implements OnInit {

  equipment:string[] = []

  equipmentMap = [
    {id: "t01", description: "Train 1"},
    {id: "t02", description: "Train 2"},
    {id: "t03", description: "Train 3"}
  ]

  test:string[] = ["test1", "test2", "test2", "test2", "test3", "test3"]
  tester:string = "test2"

  constructor(public fieldDataService: FieldDataService) {}



  ngOnInit() {



  }



}
