import styled from '../../utils/styled-component';

import { ThemedButton } from '../themed-button';

export const Container = styled.div`
    width: 100%;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;

export const SignInButton = styled(ThemedButton)`
    width: 70px;
    margin-right: 16px;
`;

export const SignUpButton = styled(ThemedButton)`
    width: 70px;
`;

export const Error = styled.div`
    font-size: 14px;
    color: red;
`;
