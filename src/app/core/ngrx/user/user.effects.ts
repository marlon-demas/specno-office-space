import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as userActions from './user.actions';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { switchMap, mergeMap, catchError, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { FirebaseError } from 'firebase/app';
import { FirebaseErrors } from '../../consts/errors';

@Injectable()
export class UserEffects {

  // #region ReqRegisterWithEmail
  ReqRegisterWithEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.ReqRegisterWithEmail),
      switchMap(({ email, password }) => from(this.authService.registerWithEmail(email, password)).pipe(
        map(() => userActions.RegisterWithEmailSuccess()),
        catchError((error: FirebaseError) => [userActions.RegisterWithEmailFail({
          error,
          toast: {
            message: FirebaseErrors.getAuthError(error.code),
            color: 'danger'
          }
        })])
      ))
    ));
  // #endregion

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private authService: AuthService,
    private userService: UserService
  ) { }
}
