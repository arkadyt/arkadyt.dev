import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Projects from './_Pages/Projects/Projects';
import EmailMe from './_Pages/EmailMe/EmailMe';
import NavBar from './NavBar/NavBar';
import { GoMarkGithub } from 'react-icons/lib/go';

import classes from './Pager.module.css';


export class Pager extends React.Component {
    routes = { // URL: UI label
        '/projects': <GoMarkGithub/>,
        '/emailme': 'E',
    }

    render() {
        return <Router basename='/pf-webapp'>
            <div className={classes.container}>
                <NavBar routes={this.routes} />
                <Switch>
                    <Route path='/projects' component={Projects} />
                    <Route path='/emailme' component={EmailMe} />
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