import * as React from 'react';
import { Subscription, empty } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { isEqual } from 'lodash';

import PortfolioDumb, { Stock } from './portfolio-dumb';
import { getShares, Share } from '../../state/user';

interface State {
    stocks: Stock[];
    balance: number;
    loading?: boolean;
}

interface Props {
    shares: Share[];
}

class Portfolio extends React.Component<Props, State> {
    state: State = {
        stocks: [],
        balance: 0,
        loading: false
    };
    subscription: Subscription;

    componentDidMount() {
        this.subscription = new Subscription();
        if (!!this.props.shares) {
            this.calculatePortfolio();
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (!isEqual(prevProps, this.props)) {
            this.calculatePortfolio();
        }
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    calculatePortfolio = () => {
        const { shares } = this.props;
        let symbols = '';
        shares.forEach(share => {
            symbols = symbols.concat(`${share.code},`);
        });
        symbols = symbols.substring(0, symbols.length - 1);

        this.setState({ loading: true });
        this.subscription = ajax
            .get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbols}&types=quote`)
            .subscribe(
                res => {
                    let balance = 0;
                    const returnedStocksQuote = res.response;
                    const retrievedStocks = Object.keys(returnedStocksQuote).map(
                        (stockSymbol: string, index: number) => {
                            balance += shares[index].quantity * returnedStocksQuote[stockSymbol].quote.latestPrice;
                            return {
                                symbol: stockSymbol,
                                company: returnedStocksQuote[stockSymbol].quote.companyName,
                                price: returnedStocksQuote[stockSymbol].quote.latestPrice,
                                quanity: shares[index].quantity,
                                changePercentage: parseFloat(
                                    returnedStocksQuote[stockSymbol].quote.changePercent.toFixed(2)
                                )
                            };
                        }
                    );
                    this.setState({ balance, stocks: retrievedStocks, loading: false });
                },
                _ => {
                    this.setState({ loading: false });
                    return empty();
                }
            );
    }

    render() {
        const balance = parseFloat(this.state.balance.toFixed(2));
        return <PortfolioDumb stocks={this.state.stocks} loading={this.state.loading} balance={balance} />;
    }
}

const selector = createSelector(getShares, shares => ({ shares }));

export default connect<Props>(selector)(Portfolio);
