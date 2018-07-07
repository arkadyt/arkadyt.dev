import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Projects from './_Pages/Projects/Projects';
import Contact from './_Pages/Contact/Contact';
import NavBar from './NavBar/NavBar';
import IoSocialGithub from 'react-icons/lib/io/social-github';
import IoSocialLinkedin from 'react-icons/lib/io/social-linkedin';

import classes from './Pager.module.css';


export class Pager extends React.Component {
    routes = { // URL: UI label
        'https://github.com/arkadyt': <IoSocialGithub />,
        'https://linkedin.com/in/arkadyt': <IoSocialLinkedin />,
        '/contact': 'C',
    }

    render() {
        return <Router basename='/pf-webapp'>
            <div className={classes.container}>
                <NavBar routes={this.routes} />
                <Switch>
                    <Route path='/projects' component={Projects} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/projects' />
                </Switch>
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