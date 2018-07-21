import styled, { css } from '../../utils/styled-component';
import { Link } from 'react-router-dom';

import { ThemedButton } from '../themed-button';
import { media } from '../../utils/breakpoint';

export const Container = styled.div`
    ${media.phone`
        height: 64px;
        padding: 0 24px;
        font-size: 16px;
    `};

    height: 80px;
    width: 100%;
    background-color: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 64px;
    font-size: 24px;
    box-sizing: border-box;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const underline = () => css`
    position: relative;
    overflow: hidden;

    &::before {
        position: absolute;
        content: '';
        bottom: 0;
        background-color: white;
        height: 2px;
        width: 50%;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
        transform: translateX(0);
    }
`;

export const StyledLink = styled(Link)`
    ${media.phone`
        margin-right: 24px;
    `};

    color: white;
    margin-right: 48px;
    text-decoration: none;
    ${underline()};
`;

export const LogOutButton = styled(ThemedButton)`
    ${media.phone`
        font-size: 16px;
    `};

    font-size: 24px;
    padding: 0;

    &:hover,
    &:active {
        color: white;
        background-color: transparent;
    }
    ${underline()};
`;
