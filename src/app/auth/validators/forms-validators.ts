import {Validator, AbstractControl} from '@angular/forms'


export class FormsValidators implements Validator {
    validate(control: AbstractControl){
        return null;
    }
}
