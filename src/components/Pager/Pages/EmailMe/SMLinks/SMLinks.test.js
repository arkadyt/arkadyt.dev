import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SMLinks from './SMLinks';

configure({ adapter: new Adapter() });

it('matches snapshot.', () => {
    const tree = renderer.create(<SMLinks />).toJSON();
    expect(tree).toMatchSnapshot();
});