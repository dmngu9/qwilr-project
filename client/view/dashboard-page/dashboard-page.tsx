import * as React from 'react';

import { Fund } from '../fund';
import { SearchShare } from '../search-share';
import { GainersTable } from '../gainer-table';
import { LosersTable } from '../loser-table';

const DashBoard: React.StatelessComponent = () => (
    <div>
        <Fund />
        <SearchShare />
        <GainersTable />
        <LosersTable />
    </div>
);

export default DashBoard;
