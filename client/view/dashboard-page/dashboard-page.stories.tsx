import * as React from 'react';

import { reduxStoriesOf } from '../../utils/storybook';
import DashBoardPage from './dashboard-page';

const state = {
    user: {
        username: 'admin',
        fullname: 'admin',
        shares: [
            {
                code: 'AAPL',
                company: 'Apple Inc.',
                quantity: 20
            },
            {
                code: 'FB',
                company: 'Facebook Inc.',
                quantity: 10
            }
        ],
        deposit: {
            amount: 0
        }
    }
};

reduxStoriesOf('DashBoardPage', module, state).add('basic', () => <DashBoardPage />);
