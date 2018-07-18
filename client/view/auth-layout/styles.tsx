import styled from '../../utils/styled-component';
import { media } from '../../utils/breakpoint';
import { flexCenter, borderBox } from '../../utils/mixins';

export const Background = styled.div`
    ${flexCenter()};
    height: 100vh;
    width: 100%;
    background: linear-gradient(20deg, ${props => props.theme.primaryColor}, #daa357);
`;

export const FormSection = styled.div`
    ${media.phone`
        width: 100%;
        padding: 32px 32px;
    `};

    display: initial;
    width: 400px;
    background-color: white;
    padding: 32px 48px;
    ${borderBox()};
`;
