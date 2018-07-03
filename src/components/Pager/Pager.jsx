import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import Projects from './_Pages/Projects/Projects'; // /projects route component.
import EmailMe from './_Pages/EmailMe/EmailMe'; // /emailme route component.
import NavBar from './NavBar/NavBar';
import DotNav from './DotNav/DotNav';
import SMLinks from './SMLinks/SMLinks';

import classes from './Pager.module.css';
import { GoChevronLeft, GoChevronRight } from 'react-icons/lib/go/';


class Pager extends React.Component {
    routes = { // address: uiLabel
        '/projects': 'Projects',
        '/emailme': 'Email Me',
    }

    render() {
        return <Router basename='/pf-webapp'>
            <div className={classes.container}>
                <div className={classes.navtop}>
                    <NavBar routes={this.routes} />
                </div>
                <Switch>
                    <Route path='/projects' render={props => (
                        <React.Fragment>
                            <Link to='' className={classes.arrowLeft}><GoChevronLeft /></Link>
                            <Projects {...props} />
                            <Link to='' className={classes.arrowRight}><GoChevronRight /></Link>
                        </React.Fragment>
                    )} />
                    <Route path='/emailme' render={props => (
                        <React.Fragment>
                            <div />
                            <EmailMe {...props} />
                            <div />
                        </React.Fragment>
                    )} />
                    <Redirect to='/emailme' />
                </Switch>
                <div className={classes.navbottom}>
                    <Switch>
                        <Route path='/projects' render={
                            () => <DotNav urls={this.props.projectsRoutes} />} />
                        <Route path='/emailme' component={SMLinks} />
                    </Switch>
                </div>
            </div>
        </Router >;
    }

    componentDidMount() {
        if (!this.props.componentLoaded) {
            this.props.onComponentLoaded();
        }
    }
};

const mapStateToProps = state => {
    return {
        componentLoaded: state.pagerLoaded,
        projectsRoutes: state.projectsRoutes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoaded: () => dispatch({ type: actionTypes.PAGER_LOADED })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pager);