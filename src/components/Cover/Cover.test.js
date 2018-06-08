import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import classes from './Cover.module.css';
import Cover from './Cover';

Enzyme.configure({ adapter: new Adapter() })

describe('<Cover/>', () => {
    it('matches snapshot.', () => {
        const outer = shallow(<Cover />);
        const Children = outer.props().children({coverLifted: true});
        const wrapper = shallow(Children);
        expect(wrapper).toMatchSnapshot();
    });

    it('has .lifted class when coverLifted (coming from CoverCtx context) is true.', () => {
        const outer = shallow(<Cover />);
        const Children = outer.props().children({coverLifted: true});
        const wrapper = shallow(Children);
        expect(wrapper.find('.lifted')).toHaveLength(1);
    });

    it('does not have .lifted class when coverLifted is false.', () => {
        const outer = shallow(<Cover />);
        const Children = outer.props().children({coverLifted: false});
        const wrapper = shallow(Children);
        expect(wrapper.find('.lifted')).toHaveLength(0);
    });
});