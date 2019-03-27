import {  AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainerSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ')>=0)
            return {cannotContainerSpace: true};
        return null;
    }
}