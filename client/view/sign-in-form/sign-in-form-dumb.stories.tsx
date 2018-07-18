import * as React from 'react';
import { themedStoriesOf } from '../../utils/storybook';
import { action } from '@storybook/addon-actions';

import SignInForm from './sign-in-form-dumb';

themedStoriesOf('SignInForm', module)
    .add('basic', () => <SignInForm loading={false} onSignIn={action('signin')} onSignUp={action('signup')} />)
    .add('loading', () => <SignInForm loading onSignIn={action('signin')} onSignUp={action('signup')} />)
    .add('with error', () => (
        <SignInForm loading={false} onSignIn={action('signin')} onSignUp={action('signup')} error="This is error" />
    ));
