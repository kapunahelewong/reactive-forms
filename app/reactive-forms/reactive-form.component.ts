
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      address: this._fb.group({
	      street: '',
	      city: '',
	      state: '',
	      zip: ''
      })
    });
  }
}

