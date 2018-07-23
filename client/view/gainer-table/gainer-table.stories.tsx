import * as React from 'react';

import { themedStoriesOf } from '../../utils/storybook';
import GainersTable from './gainer-table-dumb';

const stocks = [
    {
        symbol: 'hey',
        company: 'company',
        price: 22,
        changePercentage: 3
    },
    {
        symbol: 'minh',
        company: 'minh company',
        price: 19,
        changePercentage: 1.2
    },
    {
        symbol: 'pokemon',
        company: 'poky comp',
        price: 63,
        changePercentage: 35.36
    }
];

themedStoriesOf('GainersTable', module)
    .add('basic', () => <GainersTable stocks={stocks} />)
    .add('loading', () => <GainersTable stocks={stocks} loading />);
