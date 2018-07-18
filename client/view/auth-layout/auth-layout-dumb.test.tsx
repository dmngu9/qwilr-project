import * as React from 'react';
import { shallow } from 'enzyme';

import { AuthLayoutDumb } from './auth-layout-dumb';

describe('<AuthLayoutDumb/>', () => {
    it('should render correctly without children', () => {
        const wrapper = shallow(<AuthLayoutDumb />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with children', () => {
        const wrapper = shallow(
            <AuthLayoutDumb>
                <div>Children</div>
            </AuthLayoutDumb>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
