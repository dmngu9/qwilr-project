import * as React from 'react';

import { Form, Field } from '../form';

export interface FormValues {
    username: string;
    password: string;
}

interface Props {
    loading: boolean;
    error?: string;
    onSignIn: (values: FormValues) => void;
    onSignUp: () => void;
}

const fields: Field[] = [
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

const SignInFormDumb: React.StatelessComponent<Props> = ({ loading, error, onSignIn, onSignUp }) => (
    <Form
        loading={loading}
        error={error}
        fields={fields}
        onSubmit={onSignIn}
        submitButtonName="Sign In"
        onAlternativeAction={onSignUp}
        alternativeActionButtonName="Sign Up"
    />
);

export default SignInFormDumb;
