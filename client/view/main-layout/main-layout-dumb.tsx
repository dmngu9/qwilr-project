import * as React from 'react';

import { withRouteLayout } from '../with-route-layout';
import { NavBar } from '../nav-bar';

interface Props {
    children?: React.ReactNode;
}

export const MainLayout: React.StatelessComponent<Props> = ({ children }) => (
    <div>
        <NavBar />
        <div>{children}</div>
    </div>
);

export default withRouteLayout(MainLayout);
