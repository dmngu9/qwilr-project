import * as React from 'react';
import { DynamicTableStateless } from '@atlaskit/dynamic-table';

import { BuyLink, SellLink } from './styles';

interface Row {
    symbol: string;
    company: string;
    price: number;
    changePercentage: number;
}

interface Props {
    showSellLink?: boolean;
    caption?: React.ReactNode;
    rows: Row[];
    loading?: boolean;
}

export default class Table extends React.Component<Props> {
    createTableHeaders = () => {
        return {
            cells: [
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
                }
            ]
        };
    }
    createTableRows = () => {
        return this.props.rows.map((row: Row, index: number) => {
            return {
                key: `row-${index}-${row.symbol}`,
                cells: [
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
                        key: `${row.symbol}-buttons`,
                        content: (
                            <div>
                                <BuyLink to={`/my/buy/${row.symbol}`}>Buy</BuyLink>
                                {!!this.props.showSellLink && <SellLink to={`/my/sell/${row.symbol}`}>Sell</SellLink>}
                            </div>
                        )
                    }
                ]
            };
        });
    }

    render() {
        const { caption, loading } = this.props;
        return (
            <DynamicTableStateless
                caption={caption}
                head={this.createTableHeaders()}
                rows={this.createTableRows()}
                loadingSpinnerSize="large"
                isLoading={loading}
            />
        );
    }
}
