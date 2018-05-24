import React from 'react';
import ReactDOM from 'react-dom';

import scrollToComponent from 'react-scroll-to-component';

import MenuItem from './MenuItem';

import styles from './NavBar.css';
import { NAVBAR_HEIGHT } from './NavBar.css';

class NavBar extends React.Component {
    state = {
        highlightedItemId: 0,
        itemTitles: [
            "Home",
            "My Works",
            "Contact Me",
        ],
        opacity: 0,
        display: 'none',
    }

    render() {
        return (
            <nav style={{
                ...styles.container,
                opacity: this.state.opacity,
                display: this.state.display
            }}>
                <div>{/* Dummy div to hold correct balance inside the flexbox. */}</div>
                <ul style={styles.menu}>
                    {this.props.refsList.map((ref, index) => {
                        return <MenuItem
                            key={index} id={index}
                            title={this.state.itemTitles[index]}
                            highlighted={this.state.highlightedItemId === index}
                            onClick={this.handleMenuItemClick.bind(this)} />
                    })}
                </ul>
                <div style={styles.smlinks}></div>
            </nav>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const opVal = window.scrollY / ((window.innerHeight / 4) * 3);
            this.setState({
                opacity: opVal > 1 ? 1 : opVal, 
                display: opVal === 0 ? 'none' : 'flex',
            });

            // Get the ID of a currently displayed component at the viewport.
            let itemId = 0;
            for (let i = 0; i < this.props.refsList.length; i++) {
                // if top of an element becomes less than navbar height
                // that element's top is at the viewport top.
                if (ReactDOM.findDOMNode(this.props.refsList[i].current)
                    .getBoundingClientRect().top <= NAVBAR_HEIGHT) {
                    itemId = i;
                }
            }
            // React will ignore consequent commands with similar values.
            this.setState({ highlightedItemId: itemId });
        });
    }

    handleMenuItemClick(index) {
        scrollToComponent(this.props.refsList[index].current, {
            offset: -NAVBAR_HEIGHT,
            align: 'top',
        });
    }
}

export default NavBar;