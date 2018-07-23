import * as React from 'react';
import { ajax } from 'rxjs/ajax';
import { Subscription, empty } from 'rxjs';

import SearchShareDumb, { Stock } from './search-share-dumb';

interface State {
    stock?: Stock;
}

export default class SearchShare extends React.Component<{}, State> {
    state: State = {
        stock: undefined
    };
    subscription: Subscription;

    componentDidMount() {
        this.subscription = new Subscription();
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const subs = ajax.get(`https://api.iextrading.com/1.0/stock/${e.currentTarget.value}/quote`).subscribe(
            res => {
                const stock: Stock = {
                    symbol: res.response.symbol,
                    company: res.response.companyName,
                    price: res.response.latestPrice,
                    changePercentage: parseFloat((res.response.changePercent * 100).toFixed(2))
                };

                this.setState({ stock });
            },
            _ => {
                this.setState({ stock: undefined });
                return empty();
            }
        );

        this.subscription.add(subs);
    }

    render() {
        return <SearchShareDumb onChange={this.onChange} stock={this.state.stock} />;
    }
}
