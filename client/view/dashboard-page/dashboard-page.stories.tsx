import * as React from 'react';

import { themedStoriesOf } from '../../utils/storybook';
import DashBoardPage from './dashboard-page';

themedStoriesOf('DashBoardPage', module).add('basic', () => <DashBoardPage />);
