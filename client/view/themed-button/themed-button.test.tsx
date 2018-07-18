import * as React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'lodash';

import ThemedButton from './themed-button';
import { Button } from './styles';

describe('<ThemedButton/>', () => {
    it('should render correctly as primary button', () => {
        const wrapper = shallow(
            <ThemedButton type="submit" onClick={noop}>
                Submit
            </ThemedButton>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly as primary button when disabled', () => {
        const wrapper = shallow(
            <ThemedButton type="submit" onClick={noop} disabled>
                Submit
            </ThemedButton>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly as complementary button', () => {
        const wrapper = shallow(
            <ThemedButton type="submit" onClick={noop} complementary>
                Submit
            </ThemedButton>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly as complementary button when disabled', () => {
        const wrapper = shallow(
            <ThemedButton type="submit" onClick={noop} complementary disabled>
                Submit
            </ThemedButton>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should call onClick', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(
            <ThemedButton type="submit" onClick={mockCallback}>
                Submit
            </ThemedButton>
        );

        wrapper.find(Button).simulate('click');

        expect(mockCallback).toBeCalled();
    });
});
