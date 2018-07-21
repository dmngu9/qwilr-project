import { State } from '../index';

export const getFullname = (state: State) => state.user.fullname;

export const getDeposit = (state: State) => {
    if (!state.user.deposit) {
        return 0;
    }

    return state.user.deposit.amount;
};

export const isUpdatingDeposit = (state: State) => {
    if (!state.user.deposit) {
        return undefined;
    }

    return state.user.deposit.loading;
};

export const getDepositError = (state: State) => {
    if (!state.user.deposit) {
        return undefined;
    }

    return state.user.deposit.error;
};
