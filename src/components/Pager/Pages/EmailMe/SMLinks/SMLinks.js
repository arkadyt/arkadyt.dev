import React from 'react';

import { GoMarkGithub } from 'react-icons/lib/go';
import {
    FaTwitter, FaGooglePlus,
    FaLinkedinSquare, FaFacebookSquare
} from 'react-icons/lib/fa';

import classes from './SMLinks.module.css';

function sMLinks() {
    return <div className={classes.smlinks}>
        <GoMarkGithub className={classes.smlink} />
        <FaFacebookSquare className={classes.smlink} />
        <FaLinkedinSquare className={classes.smlink} />
        <FaTwitter className={classes.smlink} />
        <FaGooglePlus className={classes.smlink} />
    </div>;
}

export default sMLinks;