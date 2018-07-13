import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Card from './Card';

configure({ adapter: new Adapter() });

it('matches snapshot.', () => {
    const tree = renderer.create(
        <Card url='/url' header='Header' img='/img-link'>
            <div className="sampleDiv"></div>
        </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});