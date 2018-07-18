import styled, { ThemedStyledProps, Theme } from '../../utils/styled-component';
import { borderBox } from '../../utils/mixins';

interface ExtraProps {
    complementary?: boolean;
}

type Props = ThemedStyledProps<ExtraProps, Theme>;

export const Button = styled.button`
    height: 32px;
    background-color: ${(props: Props) => (!props.complementary ? props.theme.primaryColor : 'white')};
    color: ${(props: Props) => (!props.complementary ? 'white' : props.theme.primaryColor)};
    ${borderBox()};
    padding: 0 8px;
    font-size: 14px;
    border: ${(props: Props) => (!props.complementary ? 'none' : `2px solid ${props.theme.primaryColor}`)};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out;

    &:focus {
        outline: 0;
    }

    &:hover {
        cursor: pointer;
        background-color: ${(props: Props) => (!props.complementary ? '#e95a89' : 'white')};
        color: ${(props: Props) => (!props.complementary ? 'white' : '#e95a89')};
        border: ${(props: Props) => (!props.complementary ? 'none' : '2px solid #e95a89')};
    }

    &:active {
        background-color: ${(props: Props) => (!props.complementary ? '#e91B89' : 'white')};
        color: ${(props: Props) => (!props.complementary ? 'white' : '#e91B89')};
        border: ${(props: Props) => (!props.complementary ? 'none' : '2px solid #e91B89')};
    }

    &:disabled {
        color: #a5adba;
        background-color: rgba(9, 30, 66, 0.04);
        border: none;
    }
`;
