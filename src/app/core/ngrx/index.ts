import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { hydrationEffects, hydrationMetaReducer } from './hydration';
import { userEffects, userReducer, userState } from './user';
import { userFeatureKey } from './user/user.reducer';

export interface State {
  [userFeatureKey]: userState
}

export const reducers: ActionReducerMap<State> = {
  [userFeatureKey]: userReducer,
};

export const effects = [hydrationEffects, userEffects];

export const metaReducers: MetaReducer<State>[] = [hydrationMetaReducer];
