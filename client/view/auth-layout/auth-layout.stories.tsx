import * as React from 'react';
import { themedStoriesOf } from '../../utils/storybook';

import AuthLayout from './auth-layout-dumb';

const Component: React.StatelessComponent = () => <div>Fake form placeholder</div>;

themedStoriesOf('AuthLayout', module).add('basic', () => <AuthLayout path="/" component={Component} />);
