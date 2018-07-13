import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DotNav from '../DotNav/DotNav';
import classes from './Card.module.css';

const card = props => {
    return <div className={classes.container}>
        <div className={classes.grid}>
            <Switch>
                {props.images.map((url, index) => {
                    return <Route key={index} path={`${props.match.url}/${index}`} render={() =>
                        <React.Fragment>
                            <img src={url} alt='' className={classes.background} />
                            <img src={url} alt='' className={classes.widget} />
                        </React.Fragment>
                    } />
                })}
                <Redirect to={`${props.match.url}/0`} />
            </Switch>
            <DotNav images={props.images} />
            <div className={classes.description}>
                <h1 className={classes.header}>{props.header}</h1><br />
                <p>{props.body}</p><br />
                {props.tags.map((item, index) => {
                    return <span key={index} className={classes.tag}>{item}</span>;
                })}<br />
                {'youtubeUrl' in props ? 
                    <a href={props.youtubeUrl} className={[classes.tag, classes.youtube].join(' ')}>
                        View on Youtube</a> : null}
                <a href={props.url} className={[classes.tag, classes.github].join(' ')}>
                    View on GitHub</a>
            </div>
        </div>
    </div>;
};

export default card;