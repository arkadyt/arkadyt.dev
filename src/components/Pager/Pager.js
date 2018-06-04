import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Projects from './Pages/Projects/Projects'; // /projects route component.
import NavBar from './NavBar/NavBar';

import classes from './Pager.module.css';

/**
 * Holds root level router and global NavBar.
 */
const pager = () => {
    const routes = {
        '/projects': 'Projects',
    }

    return (
        <Router>
            <div className={classes.container}>
                <NavBar routes={routes} />
                <Route path='/projects' component={Projects} />
            </div>
        </Router>
    );
};

export default pager;