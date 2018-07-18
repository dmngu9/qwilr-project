import * as React from 'react';
import { Formik } from 'formik';
import { FieldTextStateless } from '@atlaskit/field-text';

import { Container, ButtonContainer, SignUpButton, Error } from './styles';

export interface FormValues {
    username: string;
    fullname: string;
    password: string;
}

interface Props {
    loading: boolean;
    error?: string;
    onSignUp: (values: FormValues) => void;
}

const SignUpFormDumb: React.StatelessComponent<Props> = ({ loading, error, onSignUp }) => (
    <Container>
        {!!error && <Error>{error}</Error>}
        <Formik onSubmit={onSignUp} initialValues={{ username: '', fullname: '', password: '' }}>
            {({ handleSubmit, handleChange, values }) => (
                <form onSubmit={handleSubmit}>
                    <FieldTextStateless
                        type="text"
                        onChange={handleChange}
                        value={values.fullname}
                        name="fullname"
                        maxLength={50}
                        label="Fullname"
                        compact={false}
                        shouldFitContainer
                        required
                        disabled={loading}
                    />
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
                        <SignUpButton type="submit" disabled={loading}>
                            Sign Up
                        </SignUpButton>
                    </ButtonContainer>
                </form>
            )}
        </Formik>
    </Container>
);

export default SignUpFormDumb;
