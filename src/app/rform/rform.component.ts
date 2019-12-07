import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      city: new FormControl('')
    });
  }

  get name() {
    return this.form.controls['name'];
  }

  get state() {
    return this.form.controls['state'];
  }

  get city() {
    return this.form.controls['city'];
  }

  ngOnInit() {}

  handler() {
    console.log(this.form.value);
  }
}
