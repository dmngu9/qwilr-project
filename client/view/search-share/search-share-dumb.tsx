import * as React from 'react';
import { FieldTextStateless } from '@atlaskit/field-text';

export interface Stock {
    symbol: string;
    company: string;
    price: number;
}

interface Props {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    stock?: Stock;
}

const SearchShareDumb: React.StatelessComponent<Props> = ({ onChange, stock }) => (
    <div>
        <FieldTextStateless
            required
            label="Enter text to find stock"
            type="text"
            name="stock"
            onChange={onChange}
            shouldFitContainer
        />
        <div>{JSON.stringify(stock)}</div>
    </div>
);

export default SearchShareDumb;
