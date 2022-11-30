import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import * as hydrationActions from './hydration.actions';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, mergeMap, switchMap, tap, catchError } from 'rxjs/operators';
import { State } from '..';
import { StorageService } from '../../services/storage/storage.service';

@Injectable()
export class HydrationEffects implements OnInitEffects {

  // #region ReqHydrate
  ReqHydrate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(hydrationActions.ReqHydrate),
      mergeMap(() => this.storageService.get('state')),
      map((state) => hydrationActions.HydrateSuccess({ state })),
      catchError((error) => {
        this.storageService.remove('state');
        return [hydrationActions.HydrateFail(error)];
      })));
  // #endregion

  // #region ReqSerialize
  serialize$ = createEffect(() =>
    this.actions$.pipe(
      ofType(hydrationActions.HydrateSuccess, hydrationActions.HydrateFail),
      switchMap(() => this.store),
      distinctUntilChanged(),
      tap((state) => {
        this.storageService.set('state', state);
      }),
    ),
    { dispatch: false }
  );
  // #endregion

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private storageService: StorageService
  ) { }
  ngrxOnInitEffects(): Action {
    return hydrationActions.ReqHydrate();
  }
}
