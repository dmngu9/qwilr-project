import * as React from 'react';
import { Subscription, empty } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import LosersTableDumb, { Stock } from './losers-table-dumb';

interface State {
    stocks: Stock[];
    loading?: boolean;
}

export default class GainersTable extends React.Component<{}, State> {
    state: State = {
        stocks: [],
        loading: false
    };
    subscription: Subscription;

    componentDidMount() {
        this.setState({ loading: true });
        this.subscription = ajax.get('https://api.iextrading.com/1.0/stock/market/list/losers').subscribe(
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
            _ => empty()
        );
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        return <LosersTableDumb stocks={this.state.stocks} loading={this.state.loading} />;
    }
}
