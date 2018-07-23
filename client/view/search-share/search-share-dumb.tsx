import * as React from 'react';
import { FieldTextStateless } from '@atlaskit/field-text';

import { Table } from '../table';
import { Header, Container, TextFieldContainer } from './styles';

export interface Stock {
    symbol: string;
    company: string;
    price: number;
    changePercentage: number;
}

interface Props {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    stock?: Stock;
}

const SearchShareDumb: React.StatelessComponent<Props> = ({ onChange, stock }) => (
    <Container>
        <Header>
            <strong>Search for stock</strong>
        </Header>
        <TextFieldContainer>
            <FieldTextStateless
                required
                label="Enter text to find stock"
                type="text"
                name="stock"
                onChange={onChange}
                shouldFitContainer
            />
        </TextFieldContainer>
        {!!stock && <Table rows={[stock]} />}
    </Container>
);

export default SearchShareDumb;
