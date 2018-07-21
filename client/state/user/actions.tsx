import { Action } from '../../types/redux-action';

export const FETCH_USER_SUCCESS = 'state.FETCH_USER_SUCCESS';
export const UPDATE_USER_DEPOSIT_FAILURE = 'state.UPDATE_USER_DEPOSIT_FAILURE';

export interface Share {
    code: string;
    company: string;
    quantity: number;
}

export interface UserReponse {
    username: string;
    fullname: string;
    deposit: number;
    shares: Share[];
}

export interface ErrorResponse {
    error: string;
}

export type FetchUserSuccessAction = Action<typeof FETCH_USER_SUCCESS, UserReponse>;
export type UpdateUserDepositFailureAction = Action<typeof UPDATE_USER_DEPOSIT_FAILURE, ErrorResponse>;

export const fetchUserSuccess = (response: UserReponse): FetchUserSuccessAction => ({
    type: FETCH_USER_SUCCESS,
    payload: response
});

export const updateUserDepositFailure = (response: ErrorResponse): UpdateUserDepositFailureAction => ({
    type: UPDATE_USER_DEPOSIT_FAILURE,
    payload: response
});
