import * as React from 'react';
import { themedStoriesOf } from '../../utils/storybook';
import { action } from '@storybook/addon-actions';

import NavBar from './nav-bar-dumb';

themedStoriesOf('NavigationBar', module).add('basic', () => <NavBar onLogout={action('signout')} />);
