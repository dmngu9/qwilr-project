import * as React from 'react';

import { Form, Field } from '../form';

export interface FormValues {
    username: string;
    fullname: string;
    password: string;
}

const fields: Field[] = [
    {
        type: 'text',
        name: 'fullname',
        label: 'Fullname',
        shouldFitContainer: true,
        required: true
    },
    {
        type: 'text',
        name: 'username',
        label: 'Username',
        shouldFitContainer: true,
        required: true
    },
    {
        type: 'password',
        name: 'password',
        label: 'Password',
        shouldFitContainer: true,
        required: true
    }
];

interface Props {
    loading: boolean;
    error?: string;
    onSignUp: (values: FormValues) => void;
}

const SignUpFormDumb: React.StatelessComponent<Props> = ({ loading, error, onSignUp }) => (
    <Form loading={loading} error={error} fields={fields} onSubmit={onSignUp} submitButtonName="Sign Up" />
);

export default SignUpFormDumb;
