import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

configure({ adapter: new Adapter() });

describe('<NavBar/> (at \'/\' route)', () => {
    it('matches snapshot.', () => {
        const routes = { '/projects': 'Projects', '/emailme': 'Email Me' }
    
        const tree = renderer.create(
            <Router>
                <NavBar routes={routes} />
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('Home button', () => {
    it('<a> tag responds on click with right parameters.', () => {
        const routes = { '/projects': 'Projects', '/emailme': 'Email Me' }
    
        const mockFunc = jest.fn();
        const component = shallow(<NavBar routes={routes} />);
        // Bypassing React 16.3 Context element manually. Enzyme's find is yet uncapable of this.
        const homeButtonLi = shallow(component.childAt(0).props().children({ setCoverLifted: mockFunc }));
        homeButtonLi.find('a').simulate('click', { preventDefault: () => {} });
        expect(mockFunc).toHaveBeenCalledWith(false); // coverLifted: false;
    })
})