import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Trade } from '../trade';

interface RouteParam {
    stockSymbol: string;
}

type Props = RouteComponentProps<RouteParam> & { type: 'buy' | 'sell' };

const BuySellPage: React.StatelessComponent<Props> = props => {
    return <Trade type={props.type} stockSymbol={props.match.params.stockSymbol} />;
};

export default BuySellPage;
