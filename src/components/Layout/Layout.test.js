import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Layout } from './Layout';

configure({ adapter: new Adapter() });

it('matches snapshot.', () => {
    const tree = shallow(<Layout projectRoutes={['1', '11']} componentLoaded={true} />);
    expect(tree).toMatchSnapshot();
});