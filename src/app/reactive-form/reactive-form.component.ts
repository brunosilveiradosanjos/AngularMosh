import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ReactiveFormValidators } from './form.validators';
import { PasswordValidators } from './password.validators'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPass: ['', Validators.required, PasswordValidators.validOldPassword],
      newPass: ['', Validators.required],
      confirmation: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  get oldPass() {
    return this.form.get('oldPass');
  }

  get newPass() {
    return this.form.get('newPass');
  }

  get confirmation() {
    return this.form.get('confirmation');
  }
}
