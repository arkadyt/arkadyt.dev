import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { Projects } from './Projects';
import data from '../../../../projects.content';

configure({ adapter: new Adapter() });

/**
 * This test isn't perfect.
 * renderer.create() renders whole tree unlike Enzyme.shallow()
 * which goes against Unit Testing paradigm.
 * 
 * I am leaving it as is for now, will fix soon.
 */

it('matches snapshot.', () => {
    const mock = jest.fn();

    const tree = renderer.create(
        <Router>
            {/* '/' causes match and following render */}
            <Route path='/'
                render={(props) => <Projects data={data} {...props} onProjectsFetched={mock} />} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});