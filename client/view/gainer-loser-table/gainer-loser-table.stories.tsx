import * as React from 'react';

import { themedStoriesOf } from '../../utils/storybook';
import GainerLoserTable from './gainer-loser-table-dumb';

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

themedStoriesOf('GainerLoserTable', module)
    .add('gainer', () => <GainerLoserTable type="gainer" stocks={stocks} />)
    .add('loser', () => <GainerLoserTable type="loser" stocks={stocks} />)
    .add('loading', () => <GainerLoserTable type="loser" stocks={stocks} loading />);
