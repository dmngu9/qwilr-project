import * as React from 'react';

import { Fund } from '../fund';
import { SearchShare } from '../search-share';
import { GainerLoserTable } from '../gainer-loser-table';
import { Portfolio } from '../portfolio';
import { Welcome } from '../welcome';

const DashBoard: React.StatelessComponent = () => (
    <div>
        <Welcome />
        <Fund />
        <SearchShare />
        <GainerLoserTable type="gainer" />
        <GainerLoserTable type="loser" />
        <Portfolio />
    </div>
);

export default DashBoard;
