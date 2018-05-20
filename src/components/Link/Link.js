import React from 'react';
import styles from './Link.css';
import Img from 'react-image';


class Link extends React.Component {
    render() {
        return (
            <a style={styles.a} href={this.props.url}>
                <div style={styles.wrapper}>
                    <span style={styles.text}>{this.props.title}</span>
                    <Img style={styles.arrowImage} src={'http://icons.iconarchive.com/icons/icons8/android/256/Arrows-Right-icon.png'} />
                </div>
            </a>
        );
    }
}

export default Link;