import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked
} from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent
  implements
    OnInit,
    AfterViewInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked {
  @Input() field;
  @Input() field2;
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  handler() {}
}
