import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';
import { Route, Redirect, Switch } from 'react-router-dom';

import Card from '../../Card/Card';

import classes from './Projects.module.css';
import content from '../../../../projects.content';
import { sentenceToURL } from '../../../../utils/utils';

/**
 * /projects route.
 * Sets up individual project routes.
 */
export class Projects extends React.Component {
    routes = [];

    render() {
        return <div className={classes.container}>
            <Switch>
                {/* When testing, separate set of data is passed through props,
            to maintain snapshot integrity. */}
                {(this.props.data || content).map((item, index) => {
                    const route =
                        `${this.props.match.url}/${sentenceToURL(item.header)}`;
                    this.routes.push(route);

                    return <Route key={index} path={route}
                        render={() => <Card header={item.header}
                            img={item.img}
                            url={item.url}
                            body={item.body} />
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