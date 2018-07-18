import * as React from 'react';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Redirect } from 'react-router-dom';
import { Subscription } from 'rxjs/Subscription';

import SignInFormDumb, { FormValues } from './sign-in-form-dumb';

interface State {
    isSigningIn: boolean;
    signedIn: boolean;
    signedUp: boolean;
    error?: string;
}

export default class SignInForm extends React.Component<{}, State> {
    state: State = {
        isSigningIn: false,
        signedIn: false,
        signedUp: false
    };
    subscription: Subscription;

    componentDidMount() {
        this.subscription = new Subscription();
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    onSignIn = (values: FormValues) => {
        this.setState({ isSigningIn: true });
        this.subscription.add(
            ajax
                .post(
                    '/api/signin',
                    { username: values.username, password: values.password },
                    { 'Content-Type': 'application/x-www-form-urlencoded' }
                )
                .subscribe(
                    () => {
                        this.setState({ isSigningIn: false });
                        this.setState({ signedIn: true });
                    },
                    err => {
                        console.log(err);
                        this.setState({ isSigningIn: false });
                        this.setState({ error: err.response.error });
                    }
                )
        );
    }

    onSignUp = () => {
        this.setState({ signedUp: true });
    }

    render() {
        const Component = this.state.signedIn ? (
            <Redirect to="/my/dashboard" />
        ) : this.state.signedUp ? (
            <Redirect to="/auth/signup" />
        ) : (
            <SignInFormDumb
                error={this.state.error}
                onSignIn={this.onSignIn}
                onSignUp={this.onSignUp}
                loading={this.state.isSigningIn}
            />
        );

        return Component;
    }
}
