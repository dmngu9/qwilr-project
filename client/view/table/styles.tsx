import { Link, LinkProps } from 'react-router-dom';

import styled, { css, ThemedStyledProps, Theme } from '../../utils/styled-component';

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

export const SellLink = styled(Link)`
    ${linkMixins()};
`;
