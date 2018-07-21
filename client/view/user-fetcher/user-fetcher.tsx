import * as React from 'react';
import { connect } from 'react-redux';

import { fetchUserInfo } from '../../epics/user';

interface Props {
    fetchUserDetails: () => void;
}

class UserFetcher extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchUserDetails();
    }

    render() {
        return null;
    }
}

export default connect<null, Props>(
    null,
    {
        fetchUserDetails: fetchUserInfo
    }
)(UserFetcher);
