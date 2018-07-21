import { Action } from '../../types/redux-action';

export const FETCH_USER_SUCCESS = 'state.FETCH_USER_SUCCESS';

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

export type FetchUserSuccessAction = Action<typeof FETCH_USER_SUCCESS, UserReponse>;

export const fetchUserSuccess = (response: UserReponse): FetchUserSuccessAction => ({
    type: FETCH_USER_SUCCESS,
    payload: response
});
