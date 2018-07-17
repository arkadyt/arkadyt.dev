import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Card from '../../Card/Card';

import classes from './Projects.module.css';
import projects from '../../../../projects.content';
import { sentenceToURL } from '../../../../utils/utils';

export class Projects extends React.Component {
    routes = [];

    render() {
        return <div className={classes.container}>
            <Switch>
                {/* When testing, separate set of data is passed through props,
            to maintain snapshot integrity. */}
                {(this.props.data || projects).map((item, index) => {
                    const route =
                        `${this.props.match.url}/${sentenceToURL(item.header)}`;
                    this.routes.push(route);
                    return <Route key={index} path={route}
                        render={props => <Card {...props} {...item} />} />
                })}
                <Redirect to={this.routes[0]} />
            </Switch>
        </div>;
    }
}

export default Projects;