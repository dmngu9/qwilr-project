import * as React from 'react';

import { themedStoriesOf } from '../../utils/storybook';
import SearchShare from './search-share';

themedStoriesOf('SearchShare', module).add('basic', () => <SearchShare />);
