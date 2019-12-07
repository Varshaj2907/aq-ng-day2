import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  counter = 1000;
  constructor() {
    console.log('Service Created');

    setTimeout(() => {
      this.counter = 2000;
    }, 2000);
  }
}
