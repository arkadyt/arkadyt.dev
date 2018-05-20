import React from 'react';
import styles from './Link.css';
import Img from 'react-image';


class Link extends React.Component {
    render() {
        return (
            <a style={styles.a} href={this.props.url}>
                <div style={styles.contentsWrapper}>
                    <span style={styles.text}>{this.props.title}</span>
                    <Img style={styles.arrowImage} src={this.props.url} />
                </div>
            </a>
        );
    }
}

export default Link;