import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Projects from './Projects';

configure({ adapter: new Adapter() });

const data = [
    {
        header: 'Area 55',
        url: 'http://a.com',
        img: 'https://picsum.photos/200/300/?random',
        body: 'Et dolore qui eiusmod ullamco ipsum nisi culpa in irure fugiat. Sint eiusmod reprehenderit anim cupidatat cupidatat aliquip esse. Cillum magna occaecat sunt cupidatat nisi magna nisi. Incididunt magna esse cupidatat reprehenderit irure et consectetur cillum. Nisi exercitation consequat quis non aliqua aliqua id excepteur velit qui consectetur cillum adipisicing.'
    }
];

it('matches snapshot.', () => {
    const tree = renderer.create(
        <Router>
            {/* '/' causes match and following render */}
            <Route path='/' 
                render={(props) => <Projects data={data} {...props} />} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});