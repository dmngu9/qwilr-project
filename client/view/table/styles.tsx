import { Link, LinkProps } from 'react-router-dom';

import styled, { css, ThemedStyledProps, Theme } from '../../utils/styled-component';
import { media } from '../../utils/breakpoint';

type Props = ThemedStyledProps<LinkProps, Theme>;

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
