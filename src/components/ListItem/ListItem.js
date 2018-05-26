import React from 'react';
import Img from 'react-image';
import Link from '../Link/Link';
import getStyles from './ListItem.css';

function listItem(props) {
    let styles = getStyles(props.id);
    return <div style={styles.wrapper}>
        <Img src={[props.picture]} style={styles.image} />
        <div style={styles.description}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <Link title='See project' url={props.link} />
        </div>
    </div>
}

export default listItem;