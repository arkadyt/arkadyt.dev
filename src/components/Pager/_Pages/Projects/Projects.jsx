import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';
import { Route, Redirect, Switch } from 'react-router-dom';

import Card from '../../Card/Card';

import classes from './Projects.module.css';
import data from '../../../../projects.content';

/**
 * /projects route.
 * Sets up routes individually for every project.
 */
class Projects extends React.Component {
    routes = [];

    render() {
        return <div className={classes.container}>
            <Switch>
                {/* When testing, separate set of data is passed through props,
            to maintain snapshot integrity. */}
                {(this.props.data || data).map((blob, index) => {
                    const route =
                        `${this.props.match.url}/${blob.header.replace(' ', '-').toLowerCase()}`;
                    this.routes.push(route);

                    return <Route key={index} path={route}
                        render={() => <Card header={blob.header}
                            img={blob.img}
                            url={blob.url}
                            body={blob.body} />
                        } />
                })}
                <Redirect to={this.routes[0]} />
            </Switch>
        </div>;
    }

    componentDidMount() {
        this.props.onProjectsFetched(this.routes);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onProjectsFetched: routes => dispatch({ type: actionTypes.UPDATE_ROUTES, payload: routes })
    }
}

export default connect(null, mapDispatchToProps)(Projects);