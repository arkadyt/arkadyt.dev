import React from 'react';

import { GoMarkGithub } from 'react-icons/lib/go';
import {
    FaTwitter, FaGooglePlus,
    FaLinkedinSquare, FaFacebookSquare
} from 'react-icons/lib/fa';

import styles from './SMLinks.css';

function sMLinks() {
    return <div style={styles.smlinks}>
        <GoMarkGithub style={styles.smlink} />
        <FaFacebookSquare style={styles.smlink} />
        <FaLinkedinSquare style={styles.smlink} />
        <FaTwitter style={styles.smlink} />
        <FaGooglePlus style={styles.smlink} />
    </div>;
}

export default sMLinks;