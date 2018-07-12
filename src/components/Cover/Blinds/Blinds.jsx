import React from 'react';
import { connect } from 'react-redux';

import classes from './Blinds.module.css';

const blinds = props => {
    return <div className={[
        classes.blinds,
        props.coverLoaded && props.layoutLoaded ? classes.fade : ''
    ].join(' ')}>
        <span className={classes.note}>Development of responsive design is still in progress.<br/><br/>Please visit the website from desktop.<br/><br/>Thank you!</span>    
    </div>;
}

const mapStateToProps = state => {
    return {
        coverLoaded: state.coverLoaded,
        layoutLoaded: state.layoutLoaded
    }
}

export default connect(mapStateToProps)(blinds);