import * as React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { ajax } from 'rxjs/ajax';
import { Subscription } from 'rxjs';
import Spinner from '@atlaskit/spinner';

import TradeDumb, { FormValues } from './trade-dumb';
import { updateUserShares } from '../../epics/user';
import { State } from '../../state';
import { getDeposit } from '../../state/user';
import { IntermidiateContainer, StyledLink } from './styles';

interface StateProps {
    fund: number;
    loading?: boolean;
    error?: string;
}

interface DispatchProps {
    processPayment: (url: string, body: object, header: object) => void;
}

interface OwnProps {
    type: 'buy' | 'sell';
    stockSymbol: string;
}

type Props = StateProps & DispatchProps & OwnProps;

interface ComponentState {
    price: number;
    company: string;
    loadingStockData?: boolean;
    failedLoadingStockData?: boolean;
}

class Trade extends React.Component<Props, ComponentState> {
    state: ComponentState = {
        price: 0,
        company: ''
    };
    subscription: Subscription;

    componentDidMount() {
        this.setState({ loadingStockData: true });
        this.subscription = ajax.get(`https://api.iextrading.com/1.0/stock/${this.props.stockSymbol}/quote`).subscribe(
            res => {
                this.setState({
                    company: res.response.companyName,
                    price: res.response.latestPrice,
                    loadingStockData: false
                });
            },
            _ => {
                this.setState({ loadingStockData: false, failedLoadingStockData: true });
            }
        );
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    onSubmit = (values: FormValues) => {
        const { quantity } = values;
        const { type, stockSymbol, processPayment } = this.props;
        const url = type === 'buy' ? `/api/user/buy/${stockSymbol}` : `/api/user/sell/${stockSymbol}`;
        const body = {
            quantity,
            symbol: stockSymbol,
            company: this.state.company,
            price: this.state.price
        };
        const header = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        processPayment(url, body, header);
    }

    render() {
        const { loading, error, fund, stockSymbol, type } = this.props;
        const { price, loadingStockData, failedLoadingStockData } = this.state;

        return (
            <>
                {failedLoadingStockData && (
                    <IntermidiateContainer>
                        <StyledLink to="/my/dashboard">
                            <h1>Stock not found. Back to Dashboard</h1>
                        </StyledLink>
                    </IntermidiateContainer>
                )}
                {loadingStockData && (
                    <IntermidiateContainer>
                        <Spinner size="large" />
                    </IntermidiateContainer>
                )}
                {!loadingStockData &&
                    !failedLoadingStockData && (
                        <TradeDumb
                            loading={loading}
                            error={error}
                            fund={parseFloat(fund.toFixed(2))}
                            stockSymbol={stockSymbol}
                            type={type}
                            price={price}
                            onSubmit={this.onSubmit}
                        />
                    )}
            </>
        );
    }
}

export const getShareLoading = (state: State, props: Props) => {
    if (!!state.user && !!state.user.shares) {
        const tradeShare = state.user.shares.filter(share => share.code === props.stockSymbol);
        if (!tradeShare[0]) {
            return undefined;
        }

        return tradeShare[0].loading;
    }
    return undefined;
};

export const getShareError = (state: State, props: Props) => {
    if (!!state.user && !!state.user.shares) {
        console.log(state.user);
        const tradeShare = state.user.shares.filter(share => share.code === props.stockSymbol);
        if (!tradeShare[0]) {
            return undefined;
        }

        return tradeShare[0].error;
    }
    return undefined;
};

const selector = createSelector(getShareLoading, getShareError, getDeposit, (loading, error, fund) => ({
    loading,
    error,
    fund
}));

export default connect<StateProps, DispatchProps, OwnProps>(
    selector,
    {
        processPayment: updateUserShares
    }
)(Trade);
