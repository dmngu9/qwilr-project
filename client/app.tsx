import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemedButton } from './view/themed-button';
import { ThemeProvider, theme } from './utils/styled-component';
import { SignInForm } from './view/sign-in-form';
import { SignUpForm } from './view/sign-up-form';
import { AuthLayout } from './view/auth-layout';

// tslint:disable
const App: React.StatelessComponent = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
                <AuthLayout exact path="/auth/signin" component={SignInForm} />
                <AuthLayout exact path="/auth/signup" component={SignUpForm} />
                <Route exact path="/my/dashboard" render={() => <ThemedButton />} />
                <Route exact path="/my/trade" render={() => <div>Trade</div>} />
                <Route exact path="/my/buy/:sharecode" render={() => <div>buy share</div>} />
                <Route exact path="/my/sell/:sharecode" render={() => <div>sell share</div>} />
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
