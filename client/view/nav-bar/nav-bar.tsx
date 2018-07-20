import * as React from 'react';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Redirect } from 'react-router-dom';
import { Subscription } from 'rxjs/Subscription';

import NavBarDumb from './nav-bar-dumb';

interface State {
    loggedOut: boolean;
}

export default class NavBar extends React.Component<{}, State> {
    state: State = {
        loggedOut: false
    };
    subscription: Subscription;

    componentDidMount() {
        this.subscription = new Subscription();
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    onLogout = () => {
        const subs = ajax.get('/api/signout').subscribe(() => this.setState({ loggedOut: true }));

        this.subscription.add(subs);
    }

    render() {
        const Component = this.state.loggedOut ? (
            <Redirect to="/auth/signin" />
        ) : (
            <NavBarDumb onLogout={this.onLogout} />
        );
        return Component;
    }
}
