import { createReducer, on } from '@ngrx/store';
import { User } from '../../consts/user';
import * as actions from './user.actions';

export const userFeatureKey = 'user';

export class State {
  user: User;
}

export const initialState = new State();

export const reducer = createReducer(
  initialState
);
