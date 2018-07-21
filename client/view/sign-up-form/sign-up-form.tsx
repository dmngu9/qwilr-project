import * as React from 'react';
import { ajax } from 'rxjs/ajax';
import { Redirect } from 'react-router-dom';
import { Subscription } from 'rxjs';

import SignUpFormDumb, { FormValues } from './sign-up-form-dumb';

interface State {
    isSigningUp: boolean;
    signedUp: boolean;
    error?: string;
}

export default class SignInForm extends React.Component<{}, State> {
    state: State = {
        isSigningUp: false,
        signedUp: false
    };
    subscription: Subscription;

    componentDidMount() {
        this.subscription = new Subscription();
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    onSignUp = (values: FormValues) => {
        this.setState({ isSigningUp: true });
        this.subscription.add(
            ajax
                .post(
                    '/api/auth/signup',
                    { fullname: values.fullname, username: values.username, password: values.password },
                    { 'Content-Type': 'application/x-www-form-urlencoded' }
                )
                .subscribe(
                    () => {
                        this.setState({ isSigningUp: false });
                        this.setState({ signedUp: true });
                    },
                    err => {
                        this.setState({ isSigningUp: false });
                        this.setState({ error: err.response.error });
                    }
                )
        );
    }

    render() {
        const Component = this.state.signedUp ? (
            <Redirect to="/auth/signin" />
        ) : (
            <SignUpFormDumb error={this.state.error} onSignUp={this.onSignUp} loading={this.state.isSigningUp} />
        );

        return Component;
    }
}
