import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Middleware } from 'redux';
import { action as storybookAction } from '@storybook/addon-actions';

import { ThemeProvider, Theme, theme } from './styled-component';
import { rootReducer, State } from '../state';

// tslint:disable-next-line:no-any
const storybookMiddleware: Middleware = () => next => (action: any) => {
    storybookAction(`${action.type}`)(`${JSON.stringify(action.payload)}`);
    return next(action);
};

export const themedStoriesOf = (name: string, module: NodeModule, storyTheme: Theme = theme) => {
    return storiesOf(name, module).addDecorator(story => {
        return (
            <ThemeProvider theme={storyTheme}>
                <MemoryRouter>{story()}</MemoryRouter>
            </ThemeProvider>
        );
    });
};

export const reduxStoriesOf = (name: string, module: NodeModule, state: NestedPartial<State> = {}) => {
    return storiesOf(name, module).addDecorator(story => {
        const store = createStore(rootReducer, state, applyMiddleware(storybookMiddleware));
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <MemoryRouter>{story()}</MemoryRouter>
                </ThemeProvider>
            </Provider>
        );
    });
};
