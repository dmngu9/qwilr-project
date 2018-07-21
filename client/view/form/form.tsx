import * as React from 'react';
import { Formik } from 'formik';
import { FieldTextStateless } from '@atlaskit/field-text';

import { Container, ButtonContainer, SubmitButton, AlternativeActionButton, Error } from './styles';

export interface Field {
    type: string;
    name: string;
    label?: string;
    shouldFitContainer: boolean;
    required: boolean;
}

interface Props {
    loading: boolean;
    fields: Field[];
    error?: string;
    onSubmit: (values: object) => void;
    submitButtonName: string;
    onAlternativeAction?: () => void;
    alternativeActionButtonName?: string;
}

const Form: React.StatelessComponent<Props> = ({
    loading,
    error,
    fields,
    onSubmit,
    submitButtonName,
    onAlternativeAction,
    alternativeActionButtonName
}) => (
    <Container>
        {!!error && <Error>{error}</Error>}
        <Formik onSubmit={onSubmit} initialValues={{}}>
            {({ handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                    {fields.map(field => (
                        <FieldTextStateless
                            key={field.name}
                            type={field.type}
                            onChange={handleChange}
                            name={field.name}
                            maxLength={50}
                            label={field.label}
                            compact={false}
                            shouldFitContainer={field.shouldFitContainer}
                            required={field.required}
                            disabled={loading}
                        />
                    ))}
                    <ButtonContainer>
                        <SubmitButton type="submit" disabled={loading} rightMargin={!!onAlternativeAction}>
                            {submitButtonName}
                        </SubmitButton>
                        {!!onAlternativeAction && (
                            <AlternativeActionButton
                                type="button"
                                disabled={loading}
                                complementary
                                onClick={onAlternativeAction}
                            >
                                {alternativeActionButtonName}
                            </AlternativeActionButton>
                        )}
                    </ButtonContainer>
                </form>
            )}
        </Formik>
    </Container>
);

export default Form;
