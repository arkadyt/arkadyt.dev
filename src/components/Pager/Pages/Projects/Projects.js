import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import ProjectCard from './ProjectCard/ProjectCard';
import NavBar from './NavBar/NavBar';

import classes from './Projects.module.css';

/**
 * /projects route.
 * Presents projects as cards, one per route at local router.
 * Also has own NavBar for its router.
 */
class Projects extends Component {
    render() {
        const routes = [];

        return <div className={classes.container}>
            <Switch>
                {this.props.data.map((blob, index) => {
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