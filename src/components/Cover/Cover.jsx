import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Blinds from '../Blinds/Blinds';
import Shadow from '../Shadow/Shadow';
import classes from './Cover.module.css';

export class Cover extends React.Component {
    render() {
        const cls = [classes.container, this.props.coverLifted ? classes.lifted : ''].join(' ');
        return <React.Fragment>
            <Blinds />
            <div className={cls}>
                <div className={classes.title}>
                    <h1>Arkady Titenko</h1>
                    <p>Software Engineer, Web Developer, Game Designer</p>
                </div>
            </div>
            <Shadow />
        </React.Fragment>;
    }

    componentDidMount() {
        window.addEventListener('wheel', e => {
            this.props.onCoverStateChange(e.deltaY > 0);
        });

        if (!this.props.componentLoaded) {
            this.props.onComponentLoaded();
        }
    }
}

const mapStateToProps = state => {
    return {
        componentLoaded: state.coverLoaded,
        coverLifted: state.coverLifted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoaded: () => dispatch({ type: actionTypes.COVER_LOADED }),
        onCoverStateChange: coverLifted =>
            dispatch({ type: actionTypes.COVER_STATE_CHANGE, payload: coverLifted })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
