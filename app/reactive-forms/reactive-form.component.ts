
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})


export class ReactiveFormComponent {

  form: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      first: '',
      last: '',
      username: '',
      password: '',
      confirm: '',
      address: this._fb.group({
	      street: '',
	      city: '',
	      state: '',
	      zip: ''
      })
    });
    this.form.setValue({
      first: 'Nancy',
      last: 'Drew',
      username: 'NancyD',
      password: '',
      confirm: '',
      address: {
      	street: '123 Fake Street',
      	city: 'San Francisco',
      	state: 'CA',
      	zip:'12345'
      }
    });
  }
}

