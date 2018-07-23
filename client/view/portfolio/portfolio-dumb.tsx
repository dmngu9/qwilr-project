import * as React from 'react';
import { DynamicTableStateless } from '@atlaskit/dynamic-table';
import Spinner from '@atlaskit/spinner';

import { Header, Total, BuyLink, SellLink, RowCell, Buttons, Container } from './styles';

export interface Stock {
    symbol: string;
    company: string;
    price: number;
    quanity: number;
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
                    content: 'Quanity',
                    shouldTruncate: true,
                    width: 10
                },
                {
                    key: 'symbol',
                    content: 'Symbol',
                    shouldTruncate: true,
                    width: 10
                },
                {
                    key: 'company',
                    content: 'Company',
                    shouldTruncate: true,
                    width: 23
                },
                {
                    key: 'price-change',
                    content: 'Price Change',
                    shouldTruncate: true,
                    width: 23
                },
                {
                    key: 'price',
                    content: 'Price',
                    shouldTruncate: true,
                    width: 23
                },
                {
                    key: 'button',
                    content: '',
                    width: 11
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
                        content: <RowCell>{row.quanity}</RowCell>
                    },
                    {
                        key: `${row.symbol}`,
                        content: <RowCell>{row.symbol}</RowCell>
                    },
                    {
                        key: `${row.symbol}-${row.company}`,
                        content: <RowCell>{row.company}</RowCell>
                    },
                    {
                        key: `${row.symbol}-${row.changePercentage}`,
                        content: <RowCell>{row.changePercentage}%</RowCell>
                    },
                    {
                        key: `${row.symbol}-price`,
                        content: <RowCell>${row.price}</RowCell>
                    },
                    {
                        key: `${row.symbol}-buttons`,
                        content: (
                            <Buttons>
                                <BuyLink to={`/my/buy/${row.symbol}`}>
                                    <RowCell>Buy</RowCell>
                                </BuyLink>
                                <SellLink to={`/my/sell/${row.symbol}`}>
                                    <RowCell>Sell</RowCell>
                                </SellLink>
                            </Buttons>
                        )
                    }
                ]
            };
        });
    }

    render() {
        const { balance, loading } = this.props;
        return (
            <Container>
                <Header>
                    <strong>Portfolio</strong>
                </Header>
                <Total>
                    Portfolio value: <strong>${balance}</strong>
                </Total>
                {loading && <Spinner size="large" />}
                {!loading && (
                    <DynamicTableStateless
                        head={this.createTableHeaders()}
                        rows={this.createTableRows()}
                        loadingSpinnerSize="large"
                        isFixedSize
                        emptyView={<h4>You currently do not own any stock</h4>}
                        isLoading={loading}
                    />
                )}
            </Container>
        );
    }
}

export default PortfolioDumb;
