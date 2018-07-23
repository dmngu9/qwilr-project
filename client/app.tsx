import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider, theme } from './utils/styled-component';
import { SignInForm } from './view/sign-in-form';
import { SignUpForm } from './view/sign-up-form';
import { AuthLayout } from './view/auth-layout';
import { MainLayout } from './view/main-layout';
import { DashBoardPage } from './view/dashboard-page';

import store from './redux-store';

const App: React.StatelessComponent = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <AuthLayout exact path="/auth/signin" component={SignInForm} />
                    <AuthLayout exact path="/auth/signup" component={SignUpForm} />
                    <MainLayout exact path="/my/dashboard" component={DashBoardPage} />
                    <MainLayout exact path="/my/trade" component={DashBoardPage} />
                    <MainLayout exact path="/my/buy/:sharecode" component={DashBoardPage} />
                    <MainLayout exact path="/my/sell/:sharecode" component={DashBoardPage} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

export default App;
