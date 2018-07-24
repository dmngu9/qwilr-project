import * as React from 'react';
import { RouteProps, Route, RouteComponentProps } from 'react-router-dom';

interface RouteParam {
    stockSymbol: string;
}

type RouterComponentProps = RouteComponentProps<RouteParam>;

interface CommonLayoutProps {
    children?: React.ReactNode;
}

type RouteFilteredProps = CommonLayoutProps & Pick<RouteProps, 'component' | 'path' | 'exact' | 'strict' | 'location'>;

const withRouteLayout = <P extends CommonLayoutProps>(
    Layout: React.ComponentType<P>
): React.ComponentType<RouteFilteredProps> => {
    return class WrappedComponent extends React.Component<RouteFilteredProps> {
        render() {
            const { component, path } = this.props;

            const Component = component as React.ComponentType<RouterComponentProps>;
            const RouterComponent: React.StatelessComponent<RouterComponentProps> = props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            );

            return <Route path={path} component={RouterComponent} />;
        }
    };
};

export default withRouteLayout;
