import { Component, OnInit } from '@angular/core';
import { FieldDataService } from './field-data.service';
import { HeaderBlockComponent } from './header-block.component';
import { FieldBlockComponent } from './field-block.component';
import { FooterBlockComponent } from './footer-block.component';

@Component({
    selector: 'my-app',
    providers: [FieldDataService],
    directives: [HeaderBlockComponent, FieldBlockComponent, FooterBlockComponent],
    template: `
    <div class="container">
      <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <header-block class="navbar-header>"></header-block>
        </div>
      </div>
        <br>
        <br>
        <br>
        <br>
        <field-block></field-block>
        <footer-block></footer-block>
    </div>

    `
})

export class AppComponent implements OnInit {

  constructor(public fieldDataService: FieldDataService) {}

  ngOnInit() {

  }

}
