import * as React from 'react';

import { Field } from '../form';
import {
    Fund,
    Deposit,
    ButtonContainer,
    ShowDepositFormButton,
    ShowWithdrawFormButton,
    Container,
    StyledForm
} from './styles';

export interface FormValues {
    amount: number;
}

const fields: Field[] = [
    {
        type: 'number',
        name: 'amount',
        label: 'Specify Amount',
        shouldFitContainer: true,
        required: true
    }
];

interface Props {
    deposit: number;
    loading: boolean;
    form: 'none' | 'deposit' | 'withdraw';
    error?: string;
    onSubmit: (values: FormValues) => void;
    onCancel: () => void;
    showDepositForm: () => void;
    showWithdrawForm: () => void;
}

const FundDumb: React.StatelessComponent<Props> = ({
    deposit,
    loading,
    onSubmit,
    form,
    error,
    showDepositForm,
    showWithdrawForm,
    onCancel
}) => {
    const submitButtonName = form === 'deposit' ? 'Deposit' : 'Withdraw';

    return (
        <Container>
            <Fund>Funds</Fund>
            <Deposit>
                <strong>${deposit} available</strong>
            </Deposit>
            {form !== 'none' && (
                <StyledForm
                    loading={loading}
                    error={error}
                    fields={fields}
                    onSubmit={onSubmit}
                    submitButtonName={submitButtonName}
                    onAlternativeAction={onCancel}
                    alternativeActionButtonName="Cancel"
                />
            )}
            {form === 'none' && (
                <ButtonContainer>
                    <ShowDepositFormButton onClick={showDepositForm}>Deposit</ShowDepositFormButton>
                    <ShowWithdrawFormButton complementary onClick={showWithdrawForm}>
                        Withdraw
                    </ShowWithdrawFormButton>
                </ButtonContainer>
            )}
        </Container>
    );
};

export default FundDumb;
