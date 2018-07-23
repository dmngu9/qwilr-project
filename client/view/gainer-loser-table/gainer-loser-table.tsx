import * as React from 'react';
import { Subscription, empty } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import GainerLoserTableDumb, { Stock } from './gainer-loser-table-dumb';

interface Props {
    type: 'gainer' | 'loser';
}

interface State {
    stocks: Stock[];
    loading?: boolean;
}

export default class GainerLoserTable extends React.Component<Props, State> {
    state: State = {
        stocks: [],
        loading: false
    };
    subscription: Subscription;

    componentDidMount() {
        this.setState({ loading: true });
        const url =
            this.props.type === 'gainer'
                ? 'https://api.iextrading.com/1.0/stock/market/list/gainers'
                : 'https://api.iextrading.com/1.0/stock/market/list/losers';

        this.subscription = ajax.get(url).subscribe(
            res => {
                // tslint:disable-next-line:no-any
                const retrievedStocks: Stock[] = res.response.map((stock: any) => ({
                    symbol: stock.symbol,
                    company: stock.companyName,
                    price: stock.latestPrice,
                    changePercentage: parseFloat(stock.changePercent.toFixed(2))
                }));
                this.setState({ stocks: retrievedStocks, loading: false });
            },
            _ => {
                this.setState({ loading: false });
                return empty();
            }
        );
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return <GainerLoserTableDumb type={this.props.type} stocks={this.state.stocks} loading={this.state.loading} />;
    }
}
