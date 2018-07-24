import { Link, LinkProps } from 'react-router-dom';

import styled, { ThemedStyledProps, Theme } from '../../utils/styled-component';
import { flexCenter } from '../../utils/mixins';
import { Form } from '../form';

export const Container = styled.div`
    width: 100%;
`;

export const Header = styled.h1`
    color: ${props => props.theme.primaryColor};
    text-align: center;
`;

export const TradeForm = styled.div`
    ${flexCenter()};
    flex-direction: column;
    margin-top: 48px;
`;

export const Price = styled.h1`
    color: ${props => props.theme.primaryColor};
    margin-bottom: 0;
`;

export const Fund = styled.p`
    margin-top: 24px;
`;

export const StyledForm = styled(Form)`
    width: 300px;
`;

export const IntermidiateContainer = styled.div`
    height: 100%;
    width: 100%;
    ${flexCenter()};
`;

type Props = ThemedStyledProps<LinkProps, Theme>;

export const StyledLink = styled(Link)`
    color: ${(props: Props) => props.theme.primaryColor};

    &:active,
    &:hover {
        color: #e91b89;
    }
`;
