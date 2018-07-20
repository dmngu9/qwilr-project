import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { ThemeProvider, theme } from './utils/styled-component';
import { SignInForm } from './view/sign-in-form';
import { SignUpForm } from './view/sign-up-form';
import { AuthLayout } from './view/auth-layout';
import { MainLayout } from './view/main-layout';

const Fake: React.StatelessComponent = () => <div>Faker</div>;

const App: React.StatelessComponent = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
                <AuthLayout exact path="/auth/signin" component={SignInForm} />
                <AuthLayout exact path="/auth/signup" component={SignUpForm} />
                <MainLayout exact path="/my/dashboard" component={Fake} />
                <MainLayout exact path="/my/trade" component={Fake} />
                <MainLayout exact path="/my/buy/:sharecode" component={Fake} />
                <MainLayout exact path="/my/sell/:sharecode" component={Fake} />
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
