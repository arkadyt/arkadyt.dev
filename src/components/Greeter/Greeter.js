import React from 'react';
import styles from './Greeter.css';

class Greeter extends React.Component {
    render() {
        return <div style={styles.container}>
            <img style={styles.image} src='https://i.imgur.com/9uekvHt.jpg'/>
            <video style={styles.vid} autoPlay="true" loop="true">
                <source src="https://www.jam3.com/wp-content/uploads/2017/08/Jam3_About_RV_v04.mp4" type="video/mp4" />
            </video>

            <p style={styles.nameParagraph}>
                <span style={{ fontWeight: 'bold', fontSize: '1.6em' }}>
                    Arkady Titenko
                </span><br />
                <span>Software Developer</span>
            </p>

            {/* Dummy objects create specific balance inside the flexbox,
                putting the visible paragraph into the first third of the space. */}
            <p style={{ margin: 'auto' }} />
            <p style={{ margin: 'auto' }} />
            <p style={{ margin: 'auto' }} />
        </div>;
    }
}

export default Greeter;