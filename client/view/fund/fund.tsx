import * as React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import FundDumb, { FormValues } from './fund-dumb';
import { getDeposit, getDepositError, isUpdatingDeposit } from '../../state/user';
import { updateUserDeposit } from '../../epics/user';

interface StateProps {
    deposit: number;
    loading?: boolean;
    error?: string;
}

interface DispatchProps {
    updateUserDepositBalance: (url: string, body: object, header: object) => void;
}

type Props = StateProps & DispatchProps;

interface State {
    form: 'none' | 'deposit' | 'withdraw';
}

export class Fund extends React.Component<Props, State> {
    state: State = {
        form: 'none'
    };

    onSubmit = (values: FormValues) => {
        const url = this.state.form === 'deposit' ? '/api/user/deposit' : '/api/user/withdraw';
        const body = this.state.form === 'deposit' ? { deposit: values.amount } : { withdraw: values.amount };
        this.props.updateUserDepositBalance(url, body, { 'Content-Type': 'application/x-www-form-urlencoded' });
    }

    onCancel = () => {
        this.setState({ form: 'none' });
    }

    showDepositForm = () => {
        this.setState({ form: 'deposit' });
    }

    showWithdrawForm = () => {
        this.setState({ form: 'withdraw' });
    }

    render() {
        const { deposit, loading, error } = this.props;
        const { form } = this.state;

        return (
            <FundDumb
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}
                showDepositForm={this.showDepositForm}
                showWithdrawForm={this.showWithdrawForm}
                form={form}
                deposit={deposit}
                error={error}
                loading={!!loading}
            />
        );
    }
}

const selector = createSelector(getDeposit, isUpdatingDeposit, getDepositError, (deposit, loading, error) => ({
    loading,
    error,
    deposit: parseFloat(deposit.toFixed(2))
}));

export default connect<StateProps, DispatchProps>(
    selector,
    {
        updateUserDepositBalance: updateUserDeposit
    }
)(Fund);
