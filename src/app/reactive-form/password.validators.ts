import { AbstractControl } from '@angular/forms';

export class PasswordValidators {

  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234')
        resolve({ invalidOldPassword: true });

      resolve(null);
    })
  }

  static passwordsShouldMatch(control: AbstractControl) {
    let newPass = control.get('newPass');
    let confirmation = control.get('confirmation');

    if (newPass.value !== confirmation.value)
      return { passwordsShouldMatch: true };

    return null;
  }
}
