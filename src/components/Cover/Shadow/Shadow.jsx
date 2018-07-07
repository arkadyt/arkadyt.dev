import React from 'react';
import classes from './Shadow.module.css';
import { connect } from 'react-redux';

const shadow = props => {
    return <div className={[classes.shadow, props.coverLifted ? classes.fade : ''].join(' ')} />;
};

const mapStateToProps = state => {
    return {
        coverLifted: state.coverLifted
    }
}

export default connect(mapStateToProps)(shadow);