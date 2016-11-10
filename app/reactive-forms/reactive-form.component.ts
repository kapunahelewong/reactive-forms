
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})


export class ReactiveFormComponent {
	form = new FormGroup ({
		first: new FormControl();
		last: new FormControl();
		username: new FormControl();
		password: new FormControl();
		confirm: new FormControl();
	});
}

