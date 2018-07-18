import * as React from 'react';
import { themedStoriesOf } from '../../utils/storybook';
import { action } from '@storybook/addon-actions';

import SignUpForm from './sign-up-form-dumb';

themedStoriesOf('SignUpForm', module)
    .add('basic', () => <SignUpForm loading={false} onSignUp={action('signup')} />)
    .add('loading', () => <SignUpForm loading onSignUp={action('signup')} />)
    .add('with error', () => <SignUpForm loading={false} onSignUp={action('signup')} error="This is error" />);
