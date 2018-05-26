import React from 'react';
import ReactDOM from 'react-dom';

import { NAVBAR_HEIGHT } from '../NavBar/NavBar.css';
import styles from './AnimatedName.css';

import lerp from 'lerp';

class AnimatedName extends React.Component {
    state = {
        animatedPStyle: {}
    }

    // to get BoundingClientRect later
    nameParagraph = React.createRef();

    render() {
        return <div style={styles.container}>
            <p style={{ ...styles.nameParagraph, ...this.state.animatedPStyle }}
                ref={this.nameParagraph}>
                <span style={{ fontWeight: 'bold', fontSize: '1.6em' }}>
                    Arkady Titenko
                </span><br />
                <span>Software Developer</span>
            </p>

            {/* Dummy objects create specific balance inside the flexbox,
                pushing the visible paragraph into the first fourth of the space. */}
            <p style={{ margin: 'auto' }} />
            <p style={{ margin: 'auto' }} />
            <p style={{ margin: 'auto' }} />
        </div>;
    }

    componentDidMount() {
        const rekt = ReactDOM.findDOMNode(this.nameParagraph.current).getBoundingClientRect();

        const startFontSize = 2.4;
        const startTop = rekt.top;
        const startLeft = rekt.left;

        const endFontSize = 0.9;
        // proportions formula to calculate height given the endFontSize.
        const endTop = (NAVBAR_HEIGHT - (rekt.height * endFontSize / startFontSize)) / 2;
        const endLeft = endTop * 2;


        window.addEventListener('scroll', () => {
            let progress = window.scrollY / ((window.innerHeight / 4) * 3);
            progress = progress > 1 ? 1 : progress;

            this.setState({
                animatedPStyle: {
                    position: 'fixed',
                    top: lerp(startTop, endTop, progress),
                    left: lerp(startLeft, endLeft, progress),
                    fontSize: lerp(startFontSize, endFontSize, progress) + 'em',
                }
            });
        });
    }

}

export default AnimatedName;