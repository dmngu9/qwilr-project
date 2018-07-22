import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider, theme } from './utils/styled-component';
import { SignInForm } from './view/sign-in-form';
import { SignUpForm } from './view/sign-up-form';
import { AuthLayout } from './view/auth-layout';
import { MainLayout } from './view/main-layout';
import { Fund } from './view/fund';
import { SearchShare } from './view/search-share';
import store from './redux-store';

const App: React.StatelessComponent = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <AuthLayout exact path="/auth/signin" component={SignInForm} />
                    <AuthLayout exact path="/auth/signup" component={SignUpForm} />
                    <MainLayout exact path="/my/dashboard" component={SearchShare} />
                    <MainLayout exact path="/my/trade" component={Fund} />
                    <MainLayout exact path="/my/buy/:sharecode" component={Fund} />
                    <MainLayout exact path="/my/sell/:sharecode" component={Fund} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

export default App;
