import { PasswordValidaors } from './../common/validators/password.validators';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidaors.oldPasswordValidate],
      newPassword: ['',
        Validators.required
      ],
      confirmPassword: ['',
        Validators.required,
      ]
    }, {
      validator: PasswordValidaors.matchPasswordValidate
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}