import * as React from 'react';
import { shallow } from 'enzyme';

import App from './app';

describe('test enzyme', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    });
});