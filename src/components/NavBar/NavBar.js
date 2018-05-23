import React from 'react';
import MenuItem from './MenuItem';
import styles from './NavBar.css';

class NavBar extends React.Component {
    state = {
        highlightedItemId: 0,
        items: [
            "Home",
            "My Works",
            "Contact Me",
        ],
        opacity: 0,
    }

    handleClick(index) {
        this.setState({
            highlightedItemId: index
        });
    }

    render() {
        return <nav style={{ ...styles.container, opacity: this.state.opacity }}>
            <div style={styles.name}>arkadyt</div>
            <ul style={styles.menu}>
                {this.state.items.map((item, index) => {
                    return <MenuItem
                        key={index} id={index} title={item}
                        highlighted={this.state.highlightedItemId === index}
                        onClick={this.handleClick.bind(this)} />
                })}
            </ul>
            <div style={styles.smlinks}></div>
        </nav>;
    }

    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            let opVal = window.scrollY / ((window.innerHeight / 4) * 3);
            opVal = opVal > 1? 1 : opVal;

            this.setState({
                opacity: opVal
            });
        });
    }
}

export default NavBar;