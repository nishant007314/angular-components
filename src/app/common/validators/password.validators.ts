import { AbstractControl, ValidationErrors } from '@angular/forms';
export class PasswordValidaors {

    static oldPasswordValidate(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) !== '1234') {
                    resolve({ oldPasswordValidate: true });
                } else {
                    resolve(null);
                }
            }, 1000)
        })
    }

    static matchPasswordValidate(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value != confirmPassword.value) {
            return { matchPasswordValidate: true }
        }
        return null;
    }
}