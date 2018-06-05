import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Projects from './Pages/Projects/Projects'; // /projects route component.
import EmailMe from './Pages/EmailMe/EmailMe'; // /emailme route component.
import NavBar from './NavBar/NavBar';

import classes from './Pager.module.css';

/**
 * Holds root level router and global NavBar.
 */
const pager = () => {
    const routes = {
        '/projects': 'Projects',
        '/emailme': 'Email Me',
    }

    return (
        <Router>
            <div className={classes.container}>
                <NavBar routes={routes} />
                <Route path='/projects' component={Projects} />
                <Route path='/emailme' component={EmailMe} />
            </div>
        </Router>
    );
};

export default pager;