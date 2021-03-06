export { default as userReducer, UserState } from './reducer';
export {
    fetchUserSuccess,
    UserReponse,
    FetchUserSuccessAction,
    updateUserDepositFailure,
    UpdateUserDepositFailureAction,
    updateUserSharesFailure,
    UpdateUserSharesFailureAction,
    ErrorResponse,
    Share
} from './actions';
export { getFullname, getDeposit, isUpdatingDeposit, getDepositError, getShares } from './selectors';
