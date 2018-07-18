import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider, Theme, theme } from './styled-component';

export const themedStoriesOf = (name: string, module: NodeModule, storyTheme: Theme = theme) => {
    return storiesOf(name, module).addDecorator(story => (
        <ThemeProvider theme={storyTheme}>
            <MemoryRouter>{story()}</MemoryRouter>
        </ThemeProvider>
    ));
};
