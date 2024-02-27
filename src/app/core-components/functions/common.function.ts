import {AbstractControl, FormGroup} from "@angular/forms";

export function markAsTouched(formGroup: any) {
  (<any>Object).values(formGroup.controls).forEach((control: any) => {
    control.markAsTouched();
    if (control.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    }
    if (control.controls) {
      markAsTouched(control);
    }
  });
}

export function isEmpty(v: any) {
  return v === '' || v === void (0) || v === null;
}

export function number(): any {
  return (control: AbstractControl) => {
    if (!control || !control.value) {
      return null;
    }
    const regex = new RegExp(/^\d+$/);
    const value = control.value.toString();
    if (!regex.test(value)) {
      const newValue = value.replace(/[^0-9]/g, '');
      control.patchValue(newValue);
    }
    return null
  };
}

export function nonEspecially(): any {
  return (control: AbstractControl) => {
    if (!control || !control.value) {
      return null;
    }
    const regex = new RegExp(/^[0-9a-z_A-Z]*$/);
    const value = control.value.toString();
    if (!regex.test(value)) {
      const newValue = value.replace(/[^0-9a-z_A-Z]/g, '');
      control.patchValue(newValue);
    }
    return null
  };
}

export function cloneObject(source: any) {
  return JSON.parse(JSON.stringify(source));
}
