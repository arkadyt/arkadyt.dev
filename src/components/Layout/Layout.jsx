import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Projects from './_Pages/Projects/Projects';
import RootPage from './_Pages/RootPage/RootPage';
import NavBar from './NavBar/NavBar';

import GitHub from 'react-icons/lib/fa/github-alt';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import MailTo from 'react-icons/lib/md/mail';
import Works from 'react-icons/lib/fa/code';

// import image from './Card/RD3CTFQ3_11.jpg';
import content from '../../projects.content';
import { sentenceToURL } from '../../utils/utils';
import classes from './Layout.module.css';

export class Layout extends React.Component {
    routes = [ // URL: UI label
        { url: 'https://github.com/arkadyt', ico: <GitHub /> },
        { url: 'https://linkedin.com/in/arkadyt', ico: <LinkedIn /> },
        { url: 'mailto:arkady.titenko@gmail.com', ico: <MailTo /> },
        { url: 'spacer' },
        { url: '/projects', ico: <Works /> },
    ];

    render() {
        return <Router basename='/pf-webapp'>
                <div className={classes.container}>
                    <Route path='/(\w+)' render={() => {
                        return <NavBar routes={this.routes} />
                    }} />
                    <Route path='/' exact render={() => (
                        <React.Fragment>
                            <div /><RootPage />
                        </React.Fragment>
                    )} />
                    <Route path='/projects' component={Projects} />
                </div>
        </Router >;
    }

    componentDidMount() {
        for (let item of content) {
            this.routes.push({ url: '/projects/' + sentenceToURL(item.header), ico: '•' });
        }

        if (!this.props.componentLoaded) {
            this.props.onComponentLoaded();
        }
    }
};

const mapStateToProps = state => {
    return {
        componentLoaded: state.layoutLoaded,
        projectsRoutes: state.projectsRoutes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoaded: () => dispatch({ type: actionTypes.PAGER_LOADED })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);