import { Action, ActionReducer } from '@ngrx/store';
import { State } from '..';
import * as fromActions from './hydration.actions';

function isHydrateSuccess(action: Action): action is ReturnType<typeof fromActions.HydrateSuccess> {
  return action.type === fromActions.HydrateSuccess.type;
}

export const metaReducer = (
  reducer: ActionReducer<State>
): ActionReducer<State> => (state, action) => {
  if (isHydrateSuccess(action)) {
    return action.state;
  } else {
    return reducer(state, action);
  }
};
