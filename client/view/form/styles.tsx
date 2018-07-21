import styled, { ThemedStyledProps, Theme } from '../../utils/styled-component';

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

interface ExtraProps {
    rightMargin: boolean;
}

type Props = ThemedStyledProps<ExtraProps, Theme>;

export const SubmitButton = styled(ThemedButton)`
    min-width: 75px;
    margin-right: ${(props: Props) => (props.rightMargin ? '16px' : '0')};
`;

export const AlternativeActionButton = styled(ThemedButton)`
    min-width: 75px;
`;

export const Error = styled.div`
    font-size: 14px;
    color: red;
`;
