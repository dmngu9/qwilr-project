import styled, { css, ThemedStyledProps, Theme } from '../../utils/styled-component';
import { Link, LinkProps } from 'react-router-dom';

import { media } from '../../utils/breakpoint';

type Props = ThemedStyledProps<LinkProps, Theme>;

export const Container = styled.div`
    margin-top: 48px;
`;

export const TableContainer = styled.div`
    width: 100%;
    margin-top: 16px;
`;

export const Header = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    color: #3a3a3a;
    padding: 0 0 10px;
    text-decoration: underline;
`;

export const Total = styled.p`
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
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

export const RowCell = styled.p`
    ${media.phone`
        font-size: 12px;
    `};

    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;
