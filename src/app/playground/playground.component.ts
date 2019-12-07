import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  styleConfig = {
    color: 'blue',
    border: '1px dotted red'
  };

  constructor() {}

  ngOnInit() {}
}
