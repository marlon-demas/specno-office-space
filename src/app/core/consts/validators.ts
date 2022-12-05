import { AbstractControl } from '@angular/forms';
import {
  ContainsDigit,
  ContainsSpecialCharacter,
  ContainsUpperCase
} from './regex';

export const PASSWORD_MINIMUM_LENGTH = 8;

export const getValidatorFunction = (
  _: (control: AbstractControl) => { [key: string]: unknown } | null
) => _;

export const PasswordValidator = getValidatorFunction((control) => {
  const controlValue = control.value?.trim();

  if (!controlValue) {
    return {
      required: true,
    };
  }

  const errors: {
    length?: boolean;
    uppercase?: boolean;
    digit?: boolean;
    specialCharacter?: boolean;
  } = {};

  if (controlValue.length < PASSWORD_MINIMUM_LENGTH) {
    errors.length = true;
  }
  if (!ContainsUpperCase.test(controlValue)) {
    errors.uppercase = true;
  }
  if (!ContainsDigit.test(controlValue)) {
    errors.digit = true;
  }
  if (!ContainsSpecialCharacter.test(controlValue)) {
    errors.specialCharacter = true;
  }

  return Object.keys(errors).length ? errors : null;
});
