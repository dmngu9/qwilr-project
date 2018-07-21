import styled from '../../utils/styled-component';
import { ThemedButton } from '../themed-button';

export const Fund = styled.div`
    font-size: 18px;
    font-weight: 300;
    color: #3a3a3a;
    padding: 0 0 10px;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
`;

export const Deposit = styled.h3`
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
