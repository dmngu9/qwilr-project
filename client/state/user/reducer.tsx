import { findIndex } from 'lodash';

import {
    FETCH_USER_SUCCESS,
    FetchUserSuccessAction,
    UPDATE_USER_DEPOSIT_FAILURE,
    UpdateUserDepositFailureAction,
    UpdateUserSharesFailureAction,
    UPDATE_USER_SHARES_FAILURE,
    ErrorResponse,
    UserReponse
} from './actions';
import {
    UPDATE_USER_DEPOSIT,
    UpdateUserDepositAction,
    UPDATE_USER_SHARES,
    UpdateUserSharesAction
} from '../../epics/user';

interface Deposit {
    amount: number;
    loading?: boolean;
    error?: string;
}

interface Share {
    code: string;
    company: string;
    quantity: number;
    loading?: boolean;
    error?: string;
}

export interface UserState {
    username: string;
    fullname: string;
    deposit: Deposit;
    shares: Share[];
}

type Action =
    | FetchUserSuccessAction
    | UpdateUserDepositFailureAction
    | UpdateUserDepositAction
    | UpdateUserSharesAction
    | UpdateUserSharesFailureAction;

const initialState = {} as UserState;

const reducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case UPDATE_USER_DEPOSIT: {
            const newDeposit: Deposit = {
                amount: state.deposit.amount,
                loading: true
            };
            return { ...state, ...{ deposit: newDeposit } };
        }
        case UPDATE_USER_SHARES: {
            // tslint:disable-next-line:no-any
            const symbol = (action.payload as any).body.symbol;
            const index = findIndex(state.shares, share => share.code === symbol);
            let newShares;

            if (index !== -1) {
                newShares = state.shares.map(share => {
                    if (share.code === symbol) {
                        share.loading = true;
                    }
                    return share;
                });
            } else {
                newShares = state.shares.concat({
                    code: symbol as string,
                    quantity: 0,
                    company: '',
                    loading: true
                });
            }

            return { ...state, ...{ shares: newShares } };
        }
        case UPDATE_USER_DEPOSIT_FAILURE: {
            const err = action.payload as ErrorResponse;
            const newDeposit: Deposit = {
                error: err.error,
                amount: state.deposit.amount
            };
            return { ...state, ...{ deposit: newDeposit } };
        }
        case UPDATE_USER_SHARES_FAILURE: {
            // tslint:disable-next-line:no-any
            const payload = action.payload as any;
            const err = payload.response;
            const symbol = payload.symbol;

            const index = findIndex(state.shares, share => share.code === symbol);
            let newShares;

            if (index !== -1) {
                newShares = state.shares.map(share => {
                    if (share.code === symbol) {
                        share.loading = undefined;
                        share.error = err.error;
                    }
                    return share;
                });
            } else {
                newShares = state.shares.concat({
                    code: symbol as string,
                    quantity: 0,
                    company: '',
                    error: err.error
                });
            }

            return { ...state, ...{ shares: newShares } };
        }
        case FETCH_USER_SUCCESS: {
            const payload = action.payload as UserReponse;
            const newDeposit: Deposit = {
                amount: payload.deposit
            };
            return { ...payload, ...{ deposit: newDeposit } };
        }
        default:
            return state;
    }
};

export default reducer;
