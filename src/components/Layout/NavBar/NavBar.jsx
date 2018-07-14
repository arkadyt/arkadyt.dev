import React from 'react';
import { NavLink, Link, Route, withRouter } from 'react-router-dom';

import { sentenceToURL } from '../../../utils/utils';
import projects from '../../../projects.content';

import GitHub from 'react-icons/lib/fa/github-alt';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import MailTo from 'react-icons/lib/md/mail';
import ArrowBack from 'react-icons/lib/md/arrow-back';

import classes from './NavBar.module.css';

const MyLink = props => {
    if (props.url === undefined) {
        return <Link to='' className={classes.Link} onClick={props.onClick}>
            {props.children}
        </Link>;
    } else if (props.url.indexOf(':') > -1) {
        return <a href={props.url} className={classes.Link} target="_blank">
            {props.children}
        </a>;
    } else {
        return <NavLink to={props.url} className={classes.Link} activeClassName={classes.active}>
            {props.children}
        </NavLink>
    }
}

class NavBar extends React.Component {
    static get staticRoutes() {
        return [ // URL: UI label
            { url: 'https://github.com/arkadyt', ico: <GitHub /> },
            { url: 'https://linkedin.com/in/arkadyt', ico: <LinkedIn /> },
            { url: 'mailto:arkady.titenko@gmail.com', ico: <MailTo /> },
        ];
    }

    render() {
        return <ul className={classes.list}>
            {this.getItems(NavBar.staticRoutes)}
            <Route path='/(.+)' render={() => {
                return <React.Fragment>
                    {this.getItems([{ url: 'spacer' }])}
                    <li key={-2}>
                        <MyLink onClick={() => { this.props.history.push('/'); }}>
                            <span className={classes.content}
                                style={{ animation: `${classes.spin} 1s ease-in-out` }}>
                                <ArrowBack />
                            </span>
                        </MyLink>
                    </li>
                </React.Fragment>
            }} />
            <Route path='/projects' render={() => {
                let routes = [];
                for (let item of projects) {
                    routes.push({ url: '/projects/' + sentenceToURL(item.header), ico: '•' });
                }
                return this.getItems(routes, true);
            }} />
        </ul>;
    }

    getItems(routes, enableSlideIn = false) {
        return routes.map((item, index) => {
            if (item.url.indexOf('spacer') > -1) {
                return <li key={-1} className={classes.spacer}><hr /></li>
            } else {
                return <li key={`${index}-${item.url}`}>
                    <MyLink url={item.url}>
                        <span style={{ animationDelay: `${index * 250}ms` }}
                            className={[classes.content, enableSlideIn ? classes.slide : ''].join(' ')}>
                            {item.ico}
                        </span>
                    </MyLink>
                </li>
            }
        });
    }
}

export default withRouter(NavBar);