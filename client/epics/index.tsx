import { combineEpics } from 'redux-observable';

import { userEpic, userDepositEpic, userSharesEpic } from './user';

export const rootEpic = combineEpics(userEpic, userDepositEpic, userSharesEpic);
