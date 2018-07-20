import * as React from 'react';
import { themedStoriesOf } from '../../utils/storybook';

import MainLayout from './main-layout-dumb';

const Component: React.StatelessComponent = () => <div>Fake main content</div>;

themedStoriesOf('MainLayout', module).add('basic', () => <MainLayout path="/" component={Component} />);
