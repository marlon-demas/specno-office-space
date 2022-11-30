import { createAction, props } from '@ngrx/store';
import { State } from '..';

export const ReqHydrate = createAction(
  '[Hydration] ReqHydrate'
);
export const HydrateSuccess = createAction(
  '[ReqHydrate] HydrateSuccess',
  props<{ state: State }>(),
);
export const HydrateFail = createAction(
  '[ReqHydrate] HydrateFail',
  props<{ error: Error }>(),
);
