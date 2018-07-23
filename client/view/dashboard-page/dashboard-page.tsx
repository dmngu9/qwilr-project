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
        <Portfolio />
        <GainerLoserTable type="gainer" />
        <GainerLoserTable type="loser" />
    </div>
);

export default DashBoard;
