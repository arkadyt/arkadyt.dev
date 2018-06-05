import React from 'react';
import classes from './Cover.module.css';
import { LiftedCtx } from '../../App';

const Cover = () => {
    return <LiftedCtx.Consumer>
        {context => {
            const cls = [classes.container, context.coverLifted ? classes.lifted : ''].join(' ');
            return <div className={cls}>
                <img src='http://placehold.it/1920x1080' alt="" />
            </div>;
        }}
    </LiftedCtx.Consumer>;
}
export default Cover;
