import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Projects from './_Pages/Projects/Projects';
import NavBar from './NavBar/NavBar';

import GitHub from 'react-icons/lib/fa/github-alt';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import MailTo from 'react-icons/lib/md/mail';
import Works from 'react-icons/lib/fa/code';

import image from './Card/RD3CTFQ3_11.jpg';
import classes from './Pager.module.css';


export class Pager extends React.Component {
    routes = { // URL: UI label
        'https://github.com/arkadyt': <GitHub />,
        'https://linkedin.com/in/arkadyt': <LinkedIn />,
        'mailto:arkady.titenko@gmail.com': <MailTo />,
        '[spacer]': '[spacer]',
        '/projects': <Works />,
        '/1': '•',
        '/2': '•',
        '/3': '•',
        '/4': '•',
    }

    render() {
        return <Router basename='/pf-webapp'>
            <React.Fragment>
                <img src={image} alt='' className={classes.background} />
                <div className={classes.container}>
                    <NavBar routes={this.routes} />
                    <Switch>
                        <Route path='/projects' component={Projects} />
                        <Redirect to='/projects' />
                    </Switch>
                </div>
            </React.Fragment>
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