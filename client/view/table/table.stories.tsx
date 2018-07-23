import * as React from 'react';

import { themedStoriesOf } from '../../utils/storybook';
import Table from './table';

const rows = [
    {
        symbol: 'AAA',
        company: 'awesome company',
        price: 12,
        changePercentage: 1.4
    },
    {
        symbol: 'FB',
        company: 'Facebook',
        price: 30,
        changePercentage: 1.4
    },
    {
        symbol: 'GG',
        company: 'Google',
        price: 24,
        changePercentage: 1.4
    }
];

themedStoriesOf('Table', module)
    .add('basic', () => <Table caption="Table" rows={rows} />)
    .add('without sell link', () => <Table caption="Table" rows={rows} />)
    .add('loading', () => <Table caption="Table" rows={rows} loading />);
