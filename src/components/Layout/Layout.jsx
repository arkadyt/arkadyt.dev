import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Projects from './_Pages/Projects/Projects';
import RootPage from './_Pages/RootPage/RootPage';
import Education from './_Pages/Education/Education';
import Experience from './_Pages/Experience/Experience';
import Contact from './_Pages/Contact/Contact';
import NavBar from './NavBar/NavBar';

import classes from './Layout.module.css';

export class Layout extends React.Component {
    render() {
        return <Router basename='/pf-webapp'>
            <div className={classes.container}>
                <NavBar />
                <Route path='/' exact component={RootPage} />
                <Route path='/projects' component={Projects} />
                <Route path='/education' component={Education} />
                <Route path='/experience' component={Experience} />
                <Route path='/contact' component={Contact} />
            </div>
        </Router >;
    }

    componentDidMount() {
        this.props.onComponentLoaded();
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoaded: () => dispatch({ type: actionTypes.PAGER_LOADED })
    }
}

export default connect(null, mapDispatchToProps)(Layout);