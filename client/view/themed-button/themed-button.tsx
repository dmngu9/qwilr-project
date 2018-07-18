import * as React from 'react';

import { Button } from './styles';

interface Props {
    children?: React.ReactNode;
    type?: string;
    disabled?: boolean;
    complementary?: boolean;
    onClick?: () => void;
    className?: string;
}

const ThemedButton: React.StatelessComponent<Props> = ({
    children,
    type,
    disabled,
    complementary,
    onClick,
    className
}) => (
    <Button className={className} onClick={onClick} type={type} disabled={disabled} complementary={complementary}>
        {children}
    </Button>
);

export default ThemedButton;
