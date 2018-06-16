import React from 'react';

import { GoMarkGithub } from 'react-icons/lib/go';
import {
    FaTwitter, FaGooglePlus,
    FaLinkedinSquare, FaFacebookSquare
} from 'react-icons/lib/fa';

import classes from './SMLinks.module.css';

function sMLinks() {
    return <ul className={classes.smlinks}>
        <li><GoMarkGithub className={classes.smlink} /></li>
        <li><FaFacebookSquare className={classes.smlink} /></li>
        <li><FaLinkedinSquare className={classes.smlink} /></li>
        <li><FaTwitter className={classes.smlink} /></li>
        <li><FaGooglePlus className={classes.smlink} /></li>
    </ul>;
}

export default sMLinks;