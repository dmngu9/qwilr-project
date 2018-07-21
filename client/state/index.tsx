import { combineReducers } from 'redux';

import { UserState, userReducer } from './user';

export interface State {
    user: UserState;
}

export const rootReducer = combineReducers<State>({
    user: userReducer
});
