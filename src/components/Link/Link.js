import React from 'react';
import styles from './Link.css';
import { GoChevronRight } from 'react-icons/lib/go';

function link(props) {
    return <a style={styles.a} href={props.url}>
        <div style={styles.wrapper}>
            <span style={styles.text}>{props.title}</span>
            <GoChevronRight style={styles.arrow} />
        </div>
    </a>;
}

export default link;