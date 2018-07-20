import * as React from 'react';

import { Container, StyledLink, LogOutButton } from './styles';

interface Props {
    onLogout: () => void;
}

const NavBar: React.StatelessComponent<Props> = ({ onLogout }) => (
    <Container>
        <StyledLink to="/my/dashboard">DashBoard</StyledLink>
        <StyledLink to="/my/trade">Trade</StyledLink>
        <LogOutButton onClick={onLogout}>Log Out</LogOutButton>
    </Container>
);

export default NavBar;
