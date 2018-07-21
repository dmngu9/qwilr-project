import { UserReponse, FETCH_USER_SUCCESS, FetchUserSuccessAction } from './actions';

export type UserState = UserReponse;

type Action = FetchUserSuccessAction;

const initialState = {} as UserState;

const reducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            const newState = action.payload as UserState;
            return newState;
        default:
            return state;
    }
};

export default reducer;
