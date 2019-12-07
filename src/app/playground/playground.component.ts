import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  books = [
    {
      title: 'title 1',
      inPrint: true
    },
    {
      title: 'title 2',
      inPrint: true
    },
    {
      title: 'title 3',
      inPrint: false
    },
    {
      title: 'title 4',
      inPrint: true
    }
  ];

  constructor() {}

  ngOnInit() {}
}
