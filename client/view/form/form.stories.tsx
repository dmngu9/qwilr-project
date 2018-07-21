import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { themedStoriesOf } from '../../utils/storybook';
import Form, { Field } from './form';

const fields: Field[] = [
    {
        type: 'text',
        name: 'field1',
        label: 'field 1 label',
        shouldFitContainer: true,
        required: true
    },
    {
        type: 'number',
        name: 'field3',
        label: 'field 3 label',
        shouldFitContainer: true,
        required: false
    },
    {
        type: 'text',
        name: 'field2',
        shouldFitContainer: false,
        required: false
    }
];

themedStoriesOf('Form', module)
    .add('basic', () => (
        <Form
            loading={false}
            onSubmit={action('submit')}
            submitButtonName="Submit"
            onAlternativeAction={action('alternativeAction')}
            alternativeActionButtonName="Cancel"
            fields={fields}
        />
    ))
    .add('error', () => (
        <Form
            loading={false}
            error="this is error"
            onSubmit={action('submit')}
            submitButtonName="Submit"
            onAlternativeAction={action('alternativeAction')}
            alternativeActionButtonName="Cancel"
            fields={fields}
        />
    ))
    .add('loading', () => (
        <Form
            loading
            onSubmit={action('submit')}
            submitButtonName="Submit"
            onAlternativeAction={action('alternativeAction')}
            alternativeActionButtonName="Cancel"
            fields={fields}
        />
    ))
    .add('with no alternative action button', () => (
        <Form loading onSubmit={action('submit')} submitButtonName="Submit" fields={fields} />
    ));
