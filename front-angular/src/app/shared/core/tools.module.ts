import {
  AbstractControl,
  FormGroup,
  ValidatorFn
} from "@angular/forms";

export namespace Tools {

  export function clone<T>(objectToClone: T): T {
    return Object.assign({}, objectToClone);
  }

  export function deepCopyArray<T>(arrayToCopy: T[]): T[] {
    return arrayToCopy.map(x => clone(x));
  }

  export function copyArray<T>(arrayToCopy: T[]): T[] {
    return [...arrayToCopy];
  }

  export function markedForm(formToMarked: FormGroup): void {
    Object.keys(formToMarked.controls).forEach(control => formToMarked.get(control).markAsTouched());
  }

  export function resetForm<T>(formToReset: FormGroup, resettingValue: T): void {
    Object.keys(formToReset.controls).forEach(control => {
      formToReset.get(control).setValue(resettingValue[control]);
      formToReset.get(control).markAsUntouched();
      formToReset.get(control).markAsPristine();
    });
  }

  export namespace CustomValidator {

    export function notEmptyList(): ValidatorFn {
      return (control: AbstractControl): {[key: string]: boolean} | null => {
        const forbidden = control.value !== undefined && control.value.length > 0;
        return forbidden ? {'emptyList': true} : null;
      }

      /*return (control.value.length != null && control.value.length > 0) ? null : {
        notEmptyList: {
          valid: false
        }
      }*/
    }

    /*
    export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
     */

  }

}
