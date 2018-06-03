import React from 'react';
import classes from './Pager.module.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from './Pages/Projects/Projects';

/**
 * Holds root level router and global NavBar.
 */
const pager = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <Router>
                <div className={classes.container}>
                    <Route path='/projects' component={Projects} />
                    {/* <Route path='/emailme' component={Projects} /> */}
                </div>
            </Router>
        </div>
    );
};

export default pager;