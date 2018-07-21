import {
    Share,
    FETCH_USER_SUCCESS,
    FetchUserSuccessAction,
    UPDATE_USER_DEPOSIT_FAILURE,
    UpdateUserDepositFailureAction,
    ErrorResponse,
    UserReponse
} from './actions';
import { UPDATE_USER_DEPOSIT, UpdateUserDepositAction } from '../../epics/user';

interface Deposit {
    amount: number;
    loading?: boolean;
    error?: string;
}

export interface UserState {
    username: string;
    fullname: string;
    deposit: Deposit;
    shares: Share[];
}

type Action = FetchUserSuccessAction | UpdateUserDepositFailureAction | UpdateUserDepositAction;

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
        case UPDATE_USER_DEPOSIT_FAILURE: {
            const err = action.payload as ErrorResponse;
            const newDeposit: Deposit = {
                error: err.error,
                amount: state.deposit.amount
            };
            return { ...state, ...{ deposit: newDeposit } };
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
