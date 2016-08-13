import { Component, OnInit } from '@angular/core';
import { FieldDataService } from './field-data.service'

@Component({
    selector: 'footer-block',
    providers: [FieldDataService],
    template: `
    <h4><a (click)="goToTop()" href="#">Back to top</a></h4>
    `
})

export class FooterBlockComponent implements OnInit {

  goToTop() {
    //code to go to top of page should go here
  }

  constructor(public fieldDataService: FieldDataService) {}

  ngOnInit() {
  }

}
