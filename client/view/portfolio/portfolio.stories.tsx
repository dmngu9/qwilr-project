import * as React from 'react';
import { themedStoriesOf } from '../../utils/storybook';

import Portfolio from './portfolio-dumb';

export interface Stock {
    symbol: string;
    company: string;
    price: number;
    quanity: number;
    totalValue: number;
    changePercentage: number;
}

const stocks = [
    {
        symbol: 'AAPl',
        company: 'Apple',
        price: 20,
        quanity: 20,
        totalValue: 400,
        changePercentage: 1.36
    },
    {
        symbol: 'AAPl',
        company: 'Apple',
        price: 20,
        quanity: 20,
        totalValue: 400,
        changePercentage: 1.36
    },
    {
        symbol: 'AAPl',
        company: 'Apple',
        price: 20,
        quanity: 20,
        totalValue: 400,
        changePercentage: 1.36
    }
];

themedStoriesOf('Portfolio', module)
    .add('basic', () => <Portfolio stocks={stocks} balance={1200} />)
    .add('loading', () => <Portfolio stocks={stocks} balance={1200} loading />);
