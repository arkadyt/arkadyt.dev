import React from 'react';
import classes from './Cover.module.css';
import { CoverCtx } from '../../hocs/withCoverCtx';

const Cover = () => {
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
export default Cover;
