import * as React from 'react';

import { withRouteLayout } from '../with-route-layout';
import { NavBar } from '../nav-bar';
import { UserFetcher } from '../user-fetcher';

interface Props {
    children?: React.ReactNode;
}

export const MainLayout: React.StatelessComponent<Props> = ({ children }) => (
    <div>
        <UserFetcher />
        <NavBar />
        <div>{children}</div>
    </div>
);

export default withRouteLayout(MainLayout);
