import ReactDOM from 'react-dom';
import React from 'react';
import Flap from './Flap';

it('mounted with no errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Flap />, div);
})