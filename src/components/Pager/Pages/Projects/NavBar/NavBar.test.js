import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router';
import NavBar from './NavBar';

configure({ adapter: new Adapter() });

it('matches snapshot.', () => {
    const tree = renderer.create(
        <Router>
            <NavBar urls={['/url1', '/url2']} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});