import * as React from 'react';
import { DynamicTableStateless } from '@atlaskit/dynamic-table';
import Spinner from '@atlaskit/spinner';

import { Header, Total, BuyLink, SellLink } from './styles';

export interface Stock {
    symbol: string;
    company: string;
    price: number;
    quanity: number;
    totalValue: number;
    changePercentage: number;
}

interface Props {
    balance: number;
    stocks: Stock[];
    loading?: boolean;
}

class PortfolioDumb extends React.Component<Props> {
    createTableHeaders = () => {
        return {
            cells: [
                {
                    key: 'quantity',
                    content: 'Quanity'
                },
                {
                    key: 'symbol',
                    content: 'Symbol'
                },
                {
                    key: 'company',
                    content: 'Company'
                },
                {
                    key: 'price-change',
                    content: 'Price Change'
                },
                {
                    key: 'price',
                    content: 'Price'
                },
                {
                    key: 'totalValue',
                    content: 'Total Value'
                }
            ]
        };
    }
    createTableRows = () => {
        return this.props.stocks.map((row, index: number) => {
            return {
                key: `row-${index}-${row.symbol}`,
                cells: [
                    {
                        key: `${row.symbol}-${index}`,
                        content: <div>{row.quanity}</div>
                    },
                    {
                        key: `${row.symbol}`,
                        content: <div>{row.symbol}</div>
                    },
                    {
                        key: `${row.symbol}-${row.company}`,
                        content: <div>{row.company}</div>
                    },
                    {
                        key: `${row.symbol}-${row.changePercentage}`,
                        content: <div>{row.changePercentage}%</div>
                    },
                    {
                        key: `${row.symbol}-price`,
                        content: <div>${row.price}</div>
                    },
                    {
                        key: `${row.symbol}-totalvalue`,
                        content: <div>${row.totalValue}</div>
                    },
                    {
                        key: `${row.symbol}-buttons`,
                        content: (
                            <div>
                                <BuyLink to={`/my/buy/${row.symbol}`}>Buy</BuyLink>
                                <SellLink to={`/my/sell/${row.symbol}`}>Sell</SellLink>
                            </div>
                        )
                    }
                ]
            };
        });
    }

    render() {
        const { balance, loading } = this.props;
        return (
            <div>
                <Header>Portfolio</Header>
                <Total>
                    Portfolio value: <strong>${balance}</strong>
                </Total>
                {loading && <Spinner size="large" />}
                {!loading && (
                    <DynamicTableStateless
                        head={this.createTableHeaders()}
                        rows={this.createTableRows()}
                        loadingSpinnerSize="large"
                        emptyView={<h4>You currently do not own any stock</h4>}
                        isLoading={loading}
                    />
                )}
            </div>
        );
    }
}

export default PortfolioDumb;
