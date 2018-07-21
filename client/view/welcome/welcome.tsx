import * as React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { Container } from './styles';
import { getFullname } from '../../state/user';

interface Props {
    fullname: string;
}

export const Welcome: React.StatelessComponent<Props> = ({ fullname }) => <Container>Good Day {fullname}</Container>;

const selector = createSelector(getFullname, fullname => ({
    fullname
}));

export default connect<Props>(selector)(Welcome);
