import { Action } from '../../types/redux-action';

export interface UpdateUserDepositPayload {
    url: string;
    body: object;
    header: object;
}

export interface UpdateUserSharesPayload {
    url: string;
    body: {
        symbol: string;
        company: string;
        quantity: string;
        price: number;
    };
    header: object;
}

export const FETCH_USER_INFO = 'epic.FETCH_USER_INFO';
export const UPDATE_USER_DEPOSIT = 'epic.UPDATE_USER_DEPOSIT';
export const UPDATE_USER_SHARES = 'epic.UPDATE_USER_SHARES';

export type FetchUserInfoAction = Action<typeof FETCH_USER_INFO>;
export type UpdateUserDepositAction = Action<typeof UPDATE_USER_DEPOSIT, UpdateUserDepositPayload>;
export type UpdateUserSharesAction = Action<typeof UPDATE_USER_SHARES, UpdateUserSharesPayload>;

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

export const updateUserShares = (
    url: string,
    body: {
        symbol: string;
        company: string;
        quantity: string;
        price: number;
    },
    header: object
): UpdateUserSharesAction => ({
    type: UPDATE_USER_SHARES,
    payload: {
        url,
        body,
        header
    }
});
