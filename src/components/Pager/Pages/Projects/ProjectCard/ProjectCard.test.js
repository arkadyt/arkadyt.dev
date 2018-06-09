import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ProjectCard from './ProjectCard';

configure({ adapter: new Adapter() });

it('matches snapshot.', () => {
    const tree = renderer.create(
        <ProjectCard url='/url' header='Header' img='/img-link'>
            <div className="sampleDiv"></div>
        </ProjectCard>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});