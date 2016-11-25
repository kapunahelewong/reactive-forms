
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  addresses: FormArray;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      // first: '',
      name: '',
      account: this._fb.group({
	      username: '',
	      password: ['', Validators.required],
	      confirm: ['', Validators.required]
      }, {validator:passwordMatcher}),
      addresses: this.buildArray()
    });
   }

   buildArray() : FormArray {
   	this.addresses = this._fb.array([
   		this.buildGroup()
   		]);
	    return this.addresses
	}

	buildGroup() : FormGroup {
	    return this._fb.group({
	        street: '',
	        city: '',
	        state: '',
	        zip: ''
    	});
  	}

  	add() {
  		this.addresses.push(this.buildGroup());
  	}
}

