import React from 'react';
import ReactDOM from 'react-dom';

import MenuItem from './MenuItem';
import SMLinks from '../SMLinks/SMLinks';

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
        animatedStyle: {
            opacity: 0,
            display: 'none',
        }
    }

    render() {
        return (
            <nav style={{ ...styles.container, ...this.state.animatedStyle }}>
                <div style={{ flex: 1 }}>
                    {/* Dummy div to hold correct balance inside the flexbox. */}
                </div>
                <ul style={styles.menu}>
                    {this.props.refsList.map((ref, index) => {
                        return <MenuItem
                            key={index} id={index}
                            title={this.state.itemTitles[index]}
                            highlighted={this.state.highlightedItemId === index}
                            onClick={this.handleItemClick.bind(this)} />
                    })}
                </ul>
                <SMLinks />
            </nav>
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.updateOpacity();
            this.updateHighlighted();
        });
    }

    /**
     * Update nav bar opacity.
     */
    updateOpacity() {
        const progress = window.scrollY / ((window.innerHeight / 4) * 3);
        this.setState({
            animatedStyle: {
                opacity: progress > 1 ? 1 : progress,
                display: progress === 0 ? 'none' : 'flex',
            }
        });
    }

    /**
     * Update highlighted menu item depending on the Y scroll position.
     */
    updateHighlighted() {
        let itemId = 0;
        // detect currently displayed component.
        for (let i = 0; i < this.props.refsList.length; i++) {
            // if top of the component is less than navbar height + offset
            // that element is taking enough screen space to highlight it
            // in menu.
            if (this.getComponentTop(this.props.refsList[i])
                <= NAVBAR_HEIGHT + window.innerHeight / 4) {
                itemId = i;
            }
        }
        this.setState({ highlightedItemId: itemId });
    }

    getComponentTop(ref) {
        return ReactDOM.findDOMNode(ref.current).getBoundingClientRect().top;
    }

    handleItemClick(index) {
        window.scrollTo({
            top: this.getComponentTop(this.props.refsList[index]) 
            + window.scrollY - NAVBAR_HEIGHT, // top is relative value!
            behavior: "smooth"
        });
    }
}

export default NavBar;