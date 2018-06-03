import React from 'react';
import ReactDOM from 'react-dom';
import ProjectCard from './ProjectCard';

it('mounted with no errors.', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectCard />, div);
});