import React from 'react';
import ReactDOM from 'react-dom';
import Pager from './Pager';

it('mounted with no errors.', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pager/>, div);
})