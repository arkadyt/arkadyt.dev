import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Card from '../../Card/Card';

import classes from './Projects.module.css';
import data from '../../../../projects.content';

/**
 * /projects route.
 * Sets up routes individually for every project.
 */
const projects = props => {
    const routes = [];

    return <div className={classes.container}>
        <Switch>
            {/* When testing, separate set of data is passed through props,
            to maintain snapshot integrity. */}
            {(props.data || data).map((blob, index) => {
                const route =
                    `${props.match.url}/${blob.header.replace(' ', '-').toLowerCase()}`;
                routes.push(route);

                return <Route key={index} path={route}
                    render={() => <Card header={blob.header}
                        img={blob.img}
                        url={blob.url}
                        body={blob.body} />
                    } />
            })}
            <Redirect to={routes[0]} />
        </Switch>
    </div>;

}

export default projects;