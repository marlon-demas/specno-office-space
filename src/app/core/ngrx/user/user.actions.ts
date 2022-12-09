import { createAction, props } from "@ngrx/store";
import { OptionalErrorActionProps } from '../../consts/errors';

// #region Register with email
export const ReqRegisterWithEmail = createAction(
  '[Auth] ReqRegisterWithEmail',
  props<{ email: string, password: string }>(),
);
export const RegisterWithEmailSuccess = createAction(
  '[ReqRegisterWithEmail] RegisterWithEmailSuccess'
);
export const RegisterWithEmailFail = createAction(
  '[ReqRegisterWithEmail] RegisterWithEmailFail',
  OptionalErrorActionProps
);
// #endregion
