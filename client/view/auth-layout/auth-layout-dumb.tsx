import * as React from 'react';

import { Background, FormSection } from './styles';
import { withRouteLayout } from '../with-route-layout';

interface Props {
    children?: React.ReactNode;
}

export const AuthLayoutDumb: React.StatelessComponent<Props> = ({ children }) => (
    <Background>
        <FormSection>{children}</FormSection>
    </Background>
);

export default withRouteLayout(AuthLayoutDumb);
