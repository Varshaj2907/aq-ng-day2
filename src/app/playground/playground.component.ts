import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  cssString = 'font-weight-bold';
  cssStringArray: string[];
  cssConfig = {
    'font-weight-bold': false,
    'font-italic': false,
    'text-danger': false
  };

  alertConfig = {
    alert: true,
    'alert-primary': false,
    'alert-danger': false
  };

  constructor() {}

  ngOnInit() {}

  handler() {
    this.alertConfig['alert-danger'] = true;
  }
}
