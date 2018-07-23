import styled from '../../utils/styled-component';
import { flexCenter } from '../../utils/mixins';
import { ThemedButton } from '../themed-button';
import { Form } from '../form';

export const Container = styled.div`
    width: 100%;
    ${flexCenter()};
    flex-direction: column;
    margin-top: 48px;
`;

export const Fund = styled.div`
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    color: #3a3a3a;
    padding: 0 0 10px;
    text-decoration: underline;
`;

export const Deposit = styled.h3`
    margin-bottom: 0;
    font-size: 24px;
`;

export const ButtonContainer = styled.div`
    margin-top: 16px;
`;

export const ShowDepositFormButton = styled(ThemedButton)`
    margin-right: 16px;
    width: 80px;
`;

export const ShowWithdrawFormButton = styled(ThemedButton)`
    width: 80px;
`;

export const StyledForm = styled(Form)`
    width: 300px;
`;
