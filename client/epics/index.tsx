import { combineEpics } from 'redux-observable';

import { userEpic, userDepositEpic } from './user';

export const rootEpic = combineEpics(userEpic, userDepositEpic);
