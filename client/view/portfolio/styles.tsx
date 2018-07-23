import styled, { css, ThemedStyledProps, Theme } from '../../utils/styled-component';
import { Link, LinkProps } from 'react-router-dom';

type Props = ThemedStyledProps<LinkProps, Theme>;

export const TableContainer = styled.div`
    width: 100%;
    margin-top: 16px;
`;

export const Header = styled.div`
    font-size: 18px;
    font-weight: 300;
    color: #3a3a3a;
    padding: 0 0 10px;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
`;

export const Total = styled.p`
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 16px;
`;

const linkMixins = () => css`
    color: ${(props: Props) => props.theme.primaryColor};

    &:active,
    &:hover {
        color: #e91b89;
    }
`;

export const BuyLink = styled(Link)`
    ${linkMixins()};
    margin-right: 16px;
`;

export const SellLink = styled(Link)`
    ${linkMixins()};
`;
