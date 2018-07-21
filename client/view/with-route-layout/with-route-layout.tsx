import * as React from 'react';
import { RouteProps, Route } from 'react-router-dom';

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

            const Component = component as React.ComponentType;
            const RouterComponent: React.StatelessComponent = () => (
                <Layout>
                    <Component />
                </Layout>
            );

            return <Route path={path} component={RouterComponent} />;
        }
    };
};

export default withRouteLayout;
