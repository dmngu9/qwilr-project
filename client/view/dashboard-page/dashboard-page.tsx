import * as React from 'react';

import { Fund } from '../fund';
import { SearchShare } from '../search-share';

const DashBoard: React.StatelessComponent = () => (
    <div>
        <Fund />
        <SearchShare />
    </div>
);

export default DashBoard;
