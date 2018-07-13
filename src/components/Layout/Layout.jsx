import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Projects from './_Pages/Projects/Projects';
import RootPage from './_Pages/RootPage/RootPage';
import Education from './_Pages/Education/Education';
import Experience from './_Pages/Experience/Experience';
import Contact from './_Pages/Contact/Contact';
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

    constructor(props) {
        super(props);

        for (let item of content) {
            this.routes.push({ url: '/projects/' + sentenceToURL(item.header), ico: '•' });
        }
    }

    render() {
        return <Router basename='/pf-webapp'>
            <div className={classes.container}>
                <NavBar routes={this.routes} />
                <Switch>
                    <Route path='/' exact component={RootPage} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/education' component={Education} />
                    <Route path='/experience' component={Experience} />
                    <Route path='/contact' component={Contact} />
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