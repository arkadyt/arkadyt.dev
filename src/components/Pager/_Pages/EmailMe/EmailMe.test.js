import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import EmailMe from './EmailMe';

configure({ adapter: new Adapter() });

it('matches snapshot.', () => {
    const tree = renderer.create(<EmailMe />).toJSON();
    expect(tree).toMatchSnapshot();
});