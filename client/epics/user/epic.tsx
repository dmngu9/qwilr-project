import { Epic, ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { empty, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
    FetchUserInfoAction,
    FETCH_USER_INFO,
    UpdateUserDepositAction,
    UpdateUserDepositPayload,
    UPDATE_USER_DEPOSIT
} from './actions';
import {
    fetchUserSuccess,
    UserReponse,
    FetchUserSuccessAction,
    updateUserDepositFailure,
    UpdateUserDepositFailureAction,
    ErrorResponse
} from '../../state/user';

export const userEpic: Epic<FetchUserInfoAction | FetchUserSuccessAction> = action$ => {
    return action$.pipe(
        ofType(FETCH_USER_INFO),
        mergeMap(() => {
            return ajax.getJSON('/api/user/details').pipe(
                map(response => fetchUserSuccess(response as UserReponse)),
                catchError(_ => empty())
            );
        })
    );
};

export const userDepositEpic: Epic<
    UpdateUserDepositAction | FetchUserSuccessAction | UpdateUserDepositFailureAction
> = action$ => {
    return action$.pipe(
        ofType(UPDATE_USER_DEPOSIT),
        mergeMap(action => {
            const { url, body, header } = action.payload as UpdateUserDepositPayload;
            return ajax.post(url, body, header).pipe(
                map(res => fetchUserSuccess(res.response as UserReponse)),
                catchError(error => of(updateUserDepositFailure(error.response as ErrorResponse)))
            );
        })
    );
};
