import * as React from 'react';
import { themedStoriesOf } from '../../utils/storybook';

import { Welcome } from './welcome';

themedStoriesOf('Welcome', module).add('basic', () => <Welcome fullname="Minh Nguyen" />);
