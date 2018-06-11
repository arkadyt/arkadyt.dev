import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import ProjectCard from './ProjectCard/ProjectCard';
import NavBar from './NavBar/NavBar';

import classes from './Projects.module.css';
import data from '../../../../projects.content';

/**
 * /projects route.
 * Presents projects as cards, one per route at local router.
 * Also has own NavBar for its router.
 */
class Projects extends Component {
    getData = () => {
        // When testing, separate set of data is passed through props,
        // to maintain snapshot integrity.
        return this.props.data || data;
    }

    render() {
        const routes = [];

        return <div className={classes.container}>
            <Switch>
                {this.getData().map((blob, index) => {
                    const route =
                        `${this.props.match.url}/${blob.header.replace(' ', '-').toLowerCase()}`;
                    routes.push(route);

                    return <Route key={index} path={route}
                        render={() => <ProjectCard header={blob.header}
                            img={blob.img}
                            url={blob.url}>
                            {blob.body}
                        </ProjectCard>} />
                })}
                <Redirect to={routes[0]} />
            </Switch>
            <NavBar urls={routes} className={classes.navBar} />
        </div>;
    }
}

export default Projects;