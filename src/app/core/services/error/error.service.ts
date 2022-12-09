import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { filter } from 'rxjs/operators';
import { ErrorAction } from '../../consts/errors';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private actions$: Actions, private toastService: ToastService) { }

  listenToNGRXErrors() {
    this.listenToNGRXErrors = () => undefined;
    this.actions$.pipe(
      filter(
        (action: ErrorAction) => action.error && action.type.endsWith("Fail")
      )
    ).subscribe((action) => this.handleNGRXError(action));
  }

  handleNGRXError(action: ErrorAction) {
    this.logFormattedErrorMessage(
      `${action.type}: ${action.error?.message || ''}`,
      action.error
    );

    if (action.toast) {
      this.toastService.show(
        action.toast.message,
        action.toast.buttonText,
        action.toast.color,
        action.toast.position
      );
    }
  }

  private logFormattedErrorMessage(message: string, error: Error) {
    console.groupCollapsed(
      ` %c${message || error.message || ''}`,
      'color:rgb(255, 128, 128); background-color:rgb(41, 0, 0);'
    );
    console.error(error);
    console.groupEnd();
  }
}
