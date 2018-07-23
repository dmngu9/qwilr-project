import * as React from 'react';

import { Table } from '../table';
import { TableContainer, Header, Container } from './styles';

export interface Stock {
    symbol: string;
    company: string;
    price: number;
    changePercentage: number;
}

interface Props {
    stocks?: Stock[];
    loading?: boolean;
    type: 'gainer' | 'loser';
}

const GainerLoserTableDumb: React.StatelessComponent<Props> = ({ stocks, loading, type }) => {
    const header = type === 'gainer' ? 'Top gainers today' : 'Top losers today';
    return (
        <Container>
            <Header>
                <strong>{header}</strong>
            </Header>
            <TableContainer>
                <Table rows={stocks as Stock[]} loading={loading} />
            </TableContainer>
        </Container>
    );
};

export default GainerLoserTableDumb;
