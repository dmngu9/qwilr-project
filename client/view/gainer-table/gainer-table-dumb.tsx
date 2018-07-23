import * as React from 'react';

import { Table } from '../table';
import { TableContainer, Header } from './styles';

export interface Stock {
    symbol: string;
    company: string;
    price: number;
    changePercentage: number;
}

interface Props {
    stocks?: Stock[];
    loading?: boolean;
}

const GainersTableDumb: React.StatelessComponent<Props> = ({ stocks, loading }) => (
    <div>
        <Header>Top gainers today</Header>
        <TableContainer>
            <Table rows={stocks as Stock[]} loading={loading} />
        </TableContainer>
    </div>
);

export default GainersTableDumb;
