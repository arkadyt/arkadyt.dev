import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Projects from './_Pages/Projects/Projects'; // /projects route component.
import EmailMe from './_Pages/EmailMe/EmailMe'; // /emailme route component.
import NavBar from './NavBar/NavBar';
import DotNav from './DotNav/DotNav';
import SMLinks from './SMLinks/SMLinks';

import classes from './Pager.module.css';
// import { connect } from 'react-redux';
import { GoChevronLeft, GoChevronRight } from 'react-icons/lib/go/';


const pager = () => {
    /* 'route' : 'nav-button-name' */
    const routes = {
        '/projects': 'Projects',
        '/emailme': 'Email Me',
    }

    return <Router basename='/pf-webapp'>
        <div className={classes.container}>
            <div className={classes.navtop}>
                <NavBar routes={routes} />
            </div>
            <a href='' className={classes.arrowLeft}><GoChevronLeft /></a>
            <Switch>
                <Route path='/projects' component={Projects} />
                <Route path='/emailme' component={EmailMe} />
                <Redirect to='/emailme' />
            </Switch>
            <a href='' className={classes.arrowRight}><GoChevronRight /></a>
            <div className={classes.navbottom}>
                <Switch>
                    <Route path='/projects' render={
                        () => <DotNav urls={['1', '2']} />} />
                    <Route path='/emailme' component={SMLinks} />
                </Switch>
            </div>
        </div>
    </Router>;
};

// const mapStateToProps = state => {
//     return {
//         projectsRoutes: state.projectsRoutes
//     }
// }
export default pager;