import React from 'react';
import Img from 'react-image';
import Link from '../Link/Link';
import Radium from 'radium';
import getStyles from './ListItem.css';

class ListItem extends React.Component {
    render() {
        let styles = getStyles(this.props.id);
        return (
            <div style={styles.wrapper}>
                <Img src={[this.props.picture]} style={styles.image}/>
                <div style={styles.description}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.content}</p>
                    <Link title='See project' url={this.props.link}/>
                </div>
            </div>
        );
    }
}

export default Radium(ListItem);