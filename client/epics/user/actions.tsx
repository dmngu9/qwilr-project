import { Action } from '../../types/redux-action';

export const FETCH_USER_INFO = 'epic.FETCH_USER_INFO';

export type FetchUserInfoAction = Action<typeof FETCH_USER_INFO>;

export const fetchUserInfo = (): FetchUserInfoAction => ({
    type: FETCH_USER_INFO
});
