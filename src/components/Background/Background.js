import React from 'react';
import styles from './Background.css';

class Background extends React.Component {
    render() {
        return <div style={styles.container}>
            <video style={styles.vid} autoPlay="true" loop="true">
                <source src="https://www.jam3.com/wp-content/uploads/2017/08/Jam3_About_RV_v04.mp4" type="video/mp4" />
            </video>
        </div>;
    }
}

export default Background;