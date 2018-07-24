import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { themedStoriesOf } from '../../utils/storybook';
import Trade from './trade-dumb';

themedStoriesOf('Trade', module)
    .add('buy', () => <Trade type="buy" stockSymbol="AAPL" price={34} fund={1000} onSubmit={action('buy')} />)
    .add('sell', () => <Trade type="sell" stockSymbol="AAPL" price={34} fund={1000} onSubmit={action('sell')} />)
    .add('loading', () => (
        <Trade type="buy" stockSymbol="AAPL" price={34} fund={1000} loading onSubmit={action('buy')} />
    ));
