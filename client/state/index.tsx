import { combineReducers } from 'redux';

import { UserState, userReducer } from './user';

interface State {
    user: UserState;
}

export const rootReducer = combineReducers<State>({
    user: userReducer
});
