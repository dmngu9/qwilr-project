import * as React from 'react';
import { themedStoriesOf } from '../../utils/storybook';

import ThemedButton from './themed-button';

themedStoriesOf('ThemedButton', module)
    .add('primary button', () => <ThemedButton type="button">Submit</ThemedButton>)
    .add('primary button disabled', () => (
        <ThemedButton type="button" disabled>
            Submit
        </ThemedButton>
    ))
    .add('complementary button', () => (
        <ThemedButton type="button" complementary>
            Submit
        </ThemedButton>
    ))
    .add('complementary button disabled', () => (
        <ThemedButton type="button" disabled complementary>
            Submit
        </ThemedButton>
    ))
    .add('button with long value', () => (
        <ThemedButton type="button" complementary>
            Submit this form for me
        </ThemedButton>
    ));
