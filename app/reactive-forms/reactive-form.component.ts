
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('confirm').value
    ? null : {'nomatch': true};
}

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
      account: this._fb.group({
	      username: '',
	      password: ['', Validators.required],
	      confirm: ['', Validators.required]
      }, {validator:passwordMatcher}),
      address: this._fb.group({
	      street: '',
	      city: '',
	      state: '',
	      zip: ''
      })
    });
  }
}

