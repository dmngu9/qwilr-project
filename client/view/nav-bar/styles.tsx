import styled, { css } from '../../utils/styled-component';
import { Link } from 'react-router-dom';

import { borderBox } from '../../utils/mixins';
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
    position: fixed;
    top: 0;
    background-color: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 64px;
    font-size: 24px;
    ${borderBox()};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const underline = () => css`
    position: relative;

    &::before {
        position: absolute;
        content: '';
        bottom: 0;
        background-color: white;
        height: 2px;
        width: 50%;
        opacity: 0;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    &:hover::before {
        transform: translateX(0);
        opacity: 1;
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
