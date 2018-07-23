import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { themedStoriesOf } from '../../utils/storybook';
import SearchShare from './search-share-dumb';

const stock = {
    symbol: 'hey',
    company: 'company',
    price: 22,
    changePercentage: 3
};

themedStoriesOf('SearchShare', module)
    .add('basic', () => <SearchShare onChange={action('change')} />)
    .add('with result', () => <SearchShare onChange={action('change')} stock={stock} />);
