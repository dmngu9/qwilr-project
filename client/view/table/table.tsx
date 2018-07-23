import * as React from 'react';
import { DynamicTableStateless } from '@atlaskit/dynamic-table';

import { BuyLink, RowCell } from './styles';

interface Row {
    symbol: string;
    company: string;
    price: number;
    changePercentage: number;
}

interface Props {
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
                    content: 'Symbol',
                    width: 15
                },
                {
                    key: 'company',
                    content: 'Company',
                    shouldTruncate: true,
                    width: 25
                },
                {
                    key: 'price-change',
                    content: 'Price Change',
                    width: 25
                },
                {
                    key: 'price',
                    content: 'Price',
                    width: 25
                },
                {
                    key: 'button',
                    content: '',
                    width: 10
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
                            <BuyLink to={`/my/buy/${row.symbol}`}>
                                <RowCell>Buy</RowCell>
                            </BuyLink>
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
                isFixedSize
                isLoading={loading}
            />
        );
    }
}
