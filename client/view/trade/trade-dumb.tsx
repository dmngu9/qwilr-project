import * as React from 'react';

import { StyledForm, Container, Price, Fund, Header, TradeForm } from './styles';
import { Field } from '../form';

export interface FormValues {
    quantity: number;
}

interface Props {
    type: 'buy' | 'sell';
    stockSymbol: string;
    price: number;
    fund: number;
    loading?: boolean;
    error?: string;
    onSubmit: (values: FormValues) => void;
}

const fields: Field[] = [
    {
        type: 'number',
        name: 'quantity',
        label: 'How many shares?',
        shouldFitContainer: true,
        required: true
    }
];

const TradeDumb: React.StatelessComponent<Props> = ({ type, stockSymbol, price, fund, onSubmit, loading, error }) => {
    const header = type === 'buy' ? `Buy ${stockSymbol}` : `Sell ${stockSymbol}`;
    const buttonName = type === 'buy' ? 'Buy' : 'Sell';
    return (
        <Container>
            <Header>{header}</Header>
            <TradeForm>
                <Price>
                    1 {stockSymbol} = ${price}
                </Price>
                <Fund>
                    <strong>Available funds ${fund}</strong>
                </Fund>
                <StyledForm
                    fields={fields}
                    onSubmit={onSubmit}
                    submitButtonName={buttonName}
                    loading={!!loading}
                    error={error}
                />
            </TradeForm>
        </Container>
    );
};

export default TradeDumb;
