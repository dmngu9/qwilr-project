import * as React from 'react';
import { Formik } from 'formik';
import { FieldTextStateless } from '@atlaskit/field-text';

import { Container, ButtonContainer, SignInButton, SignUpButton, Error } from './styles';

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

const SignInFormDumb: React.StatelessComponent<Props> = ({ loading, error, onSignIn, onSignUp }) => (
    <Container>
        {!!error && <Error>{error}</Error>}
        <Formik onSubmit={onSignIn} initialValues={{ username: '', password: '' }}>
            {({ handleSubmit, handleChange, values }) => (
                <form onSubmit={handleSubmit}>
                    <FieldTextStateless
                        type="text"
                        onChange={handleChange}
                        value={values.username}
                        name="username"
                        maxLength={50}
                        label="Username"
                        compact={false}
                        shouldFitContainer
                        required
                        disabled={loading}
                    />
                    <FieldTextStateless
                        type="password"
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        maxLength={50}
                        label="Password"
                        compact={false}
                        shouldFitContainer
                        required
                        disabled={loading}
                    />
                    <ButtonContainer>
                        <SignInButton type="submit" disabled={loading}>
                            Sign In
                        </SignInButton>
                        <SignUpButton type="button" disabled={loading} complementary onClick={onSignUp}>
                            Sign Up
                        </SignUpButton>
                    </ButtonContainer>
                </form>
            )}
        </Formik>
    </Container>
);

export default SignInFormDumb;
