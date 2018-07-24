import * as React from 'react';
import { BrowserRouter, RouteComponentProps, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider, theme } from './utils/styled-component';
import { SignInForm } from './view/sign-in-form';
import { SignUpForm } from './view/sign-up-form';
import { AuthLayout } from './view/auth-layout';
import { MainLayout } from './view/main-layout';
import { DashBoardPage } from './view/dashboard-page';
import { BuySellPage } from './view/buy-sell-page';
import store from './redux-store';

// tslint:disable:jsx-no-lambda
const App: React.StatelessComponent = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <AuthLayout exact path="/auth/signin" component={SignInForm} />
                    <AuthLayout exact path="/auth/signup" component={SignUpForm} />
                    <MainLayout exact path="/my/dashboard" component={DashBoardPage} />
                    <MainLayout
                        exact
                        path="/my/buy/:stockSymbol"
                        component={(props: RouteComponentProps<{ stockSymbol: string }>) => (
                            <BuySellPage type="buy" {...props} />
                        )}
                    />
                    <MainLayout
                        exact
                        path="/my/sell/:stockSymbol"
                        component={(props: RouteComponentProps<{ stockSymbol: string }>) => (
                            <BuySellPage type="sell" {...props} />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

export default App;
