import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { themedStoriesOf } from '../../utils/storybook';
import { Fund } from './fund';

themedStoriesOf('Fund', module)
    .add('basic', () => <Fund deposit={34} updateUserDepositBalance={action('update deposit')} />)
    .add('error', () => <Fund deposit={34} error="this is error" updateUserDepositBalance={action('update deposit')} />)
    .add('loading', () => <Fund deposit={34} loading updateUserDepositBalance={action('update deposit')} />);
