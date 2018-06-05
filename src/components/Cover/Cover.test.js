import ReactDOM from 'react-dom';
import React from 'react';
import Cover from './Cover';

it('mounted with no errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cover />, div);
})