import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import classes from './Cover.module.css';
import { CoverCtx } from '../../hocs/withCoverCtx';

export class Cover extends React.Component {
    render() {
        return (
            <CoverCtx.Consumer>
                {context => {
                    const cls = [classes.container, context.coverLifted ? classes.lifted : ''].join(' ');
                    return <div className={cls}>
                        <img src='http://placehold.it/1920x1080' alt="" />
                    </div>;
                }}
            </CoverCtx.Consumer>
        );
    }

    componentDidMount() {
        if (!this.props.componentLoaded) {
            this.props.onComponentLoaded();
        }
    }
}

const mapStateToProps = state => {
    return {
        componentLoaded: state.coverLoaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoaded: () => dispatch({ type: actionTypes.COVER_LOADED })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
