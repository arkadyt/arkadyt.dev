import React from 'react';

import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/lib/fa';

// elements are automatically targeted in css
// eslint-disable-next-line
import classes from './NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return <ul>
            {this.props.urls.map(url => (
                <li key={url}>
                    <Link to={url}>
                        <FaCircle />
                    </Link>
                </li>
            ))}
        </ul>;
    }
};

export default NavBar;