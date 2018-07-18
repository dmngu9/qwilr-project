import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Route } from 'react-router-dom';

import withRouteLayout from './with-route-layout';

interface Props {
    children?: React.ReactNode;
}

const TestLayout: React.StatelessComponent<Props> = ({ children }) => <div>{children}</div>;

const TestComponent: React.StatelessComponent = () => <div>test component</div>;

describe('withRouteLayout', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        const RouteLayout = withRouteLayout(TestLayout);
        wrapper = shallow(<RouteLayout path="/" component={TestComponent} />);
    });

    it('should render correctly as Route', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should pass in correct component to Route', () => {
        const Component = wrapper.find(Route).props().component;

        expect(shallow(<Component />)).toMatchSnapshot();
    });
});
