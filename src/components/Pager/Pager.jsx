import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

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
            <Switch>
                <Route path='/projects' render={props => (
                    <React.Fragment>
                        <Link to='' className={classes.arrowLeft}><GoChevronLeft /></Link>                    
                        <Projects {...props}/>
                        <Link to='' className={classes.arrowRight}><GoChevronRight /></Link>
                    </React.Fragment>
                )} />
                <Route path='/emailme' render={props => (
                    <React.Fragment>
                        <div/> 
                        <EmailMe {...props}/>
                        <div/>
                    </React.Fragment>
                )} />
                <Redirect to='/emailme' />
            </Switch>
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