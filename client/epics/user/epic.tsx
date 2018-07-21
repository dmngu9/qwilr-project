import { Epic, ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { FetchUserInfoAction, FETCH_USER_INFO } from './actions';
import { fetchUserSuccess, UserReponse, FetchUserSuccessAction } from '../../state/user';

const userEpic: Epic<FetchUserInfoAction | FetchUserSuccessAction> = action$ => {
    return action$.pipe(
        ofType(FETCH_USER_INFO),
        mergeMap(_ => {
            return ajax.getJSON('/api/user/details').pipe(map(response => fetchUserSuccess(response as UserReponse)));
        }),
        catchError(_ => empty())
    );
};

export default userEpic;
