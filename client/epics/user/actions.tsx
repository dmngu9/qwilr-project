import { Action } from '../../types/redux-action';

export interface UpdateUserDepositPayload {
    url: string;
    body: object;
    header: object;
}

export const FETCH_USER_INFO = 'epic.FETCH_USER_INFO';
export const UPDATE_USER_DEPOSIT = 'epic.UPDATE_USER_DEPOSIT';

export type FetchUserInfoAction = Action<typeof FETCH_USER_INFO>;
export type UpdateUserDepositAction = Action<typeof UPDATE_USER_DEPOSIT, UpdateUserDepositPayload>;

export const fetchUserInfo = (): FetchUserInfoAction => ({
    type: FETCH_USER_INFO
});

export const updateUserDeposit = (url: string, body: object, header: object): UpdateUserDepositAction => ({
    type: UPDATE_USER_DEPOSIT,
    payload: {
        url,
        body,
        header
    }
});
