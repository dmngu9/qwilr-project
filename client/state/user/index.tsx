export { default as userReducer, UserState } from './reducer';
export {
    fetchUserSuccess,
    UserReponse,
    FetchUserSuccessAction,
    updateUserDepositFailure,
    UpdateUserDepositFailureAction,
    ErrorResponse
} from './actions';
export { getFullname, getDeposit, isUpdatingDeposit, getDepositError } from './selectors';
