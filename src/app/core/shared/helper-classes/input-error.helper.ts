import { Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive()
export class InputErrorHelper {
  public formGroup!: FormGroup;

  public get emailErrorMessage(): string {
    const controlErrors = this.formGroup.get('email')?.errors;

    return controlErrors?.['required']
      ? 'Email is required'
      : controlErrors?.['pattern']
        ? 'Invalid email'
        : '';
  }

  public get passwordErrorMessage(): string {
    const controlErrors = (
      this.formGroup.get('password') || this.formGroup.get('create_password')
    )?.errors;

    return controlErrors?.['required']
      ? 'Password is required'
      : controlErrors?.['pattern']
        ? 'Invalid password'
        : '';
  }
}
