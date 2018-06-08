import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

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
        const data = [
            {
                header: 'Area 55',
                url: 'http://a.com',
                img: 'https://picsum.photos/200/300/?random',
                body: 'Et dolore qui eiusmod ullamco ipsum nisi culpa in irure fugiat. Sint eiusmod reprehenderit anim cupidatat cupidatat aliquip esse. Cillum magna occaecat sunt cupidatat nisi magna nisi. Incididunt magna esse cupidatat reprehenderit irure et consectetur cillum. Nisi exercitation consequat quis non aliqua aliqua id excepteur velit qui consectetur cillum adipisicing.'
            },
            {
                header: 'Area 71',
                url: 'http://a.com',
                img: 'https://picsum.photos/200/500/?random',
                body: 'Et dolore qui eiusmod ullamco ipsum nisi culpa in irure fugiat. Sint eiusmod reprehenderit anim cupidatat cupidatat aliquip esse. Cillum magna occaecat sunt cupidatat nisi magna nisi. Incididunt magna esse cupidatat reprehenderit irure et consectetur cillum. Nisi exercitation consequat quis non aliqua aliqua id excepteur velit qui consectetur cillum adipisicing.'
            },
        ];

        const routes = [];

        return <Router>
            <div className={classes.container}>
                <Switch>
                    {data.map((blob, index) => {
                        const route =
                            `${this.props.match.url}/${blob.header.replace(' ', '-').toLowerCase()}`;
                        routes.push(route);

                        return (
                            <Route key={index} path={route}
                                render={() =>
                                    (<ProjectCard header={blob.header}
                                        img={blob.img}
                                        url={blob.url}>
                                        {blob.body}
                                    </ProjectCard>)
                                } />)
                    })}
                </Switch>
                <NavBar urls={routes} className={classes.navBar} />
                <Redirect to={routes[0]} />
            </div>
        </Router>;
    }
}

export default Projects;