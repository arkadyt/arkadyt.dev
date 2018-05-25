import React from 'react';
import styles from './Link.css';
import { GoChevronRight } from 'react-icons/lib/go';

class Link extends React.Component {
    render() {
        return (
            <a style={styles.a} href={this.props.url}>
                <div style={styles.wrapper}>
                    <span style={styles.text}>{this.props.title}</span>
                    <GoChevronRight style={styles.arrow} />
                </div>
            </a>
        );
    }
}

export default Link;