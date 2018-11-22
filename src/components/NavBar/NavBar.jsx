import React from 'react';
import './NavBar.css';
import {
  FaBars
} from 'react-icons/fa';

class NavBar extends React.Component {
    state = {
        showDropdown: false
    }

    toggleDropdown = () => {
        console.log('cliked');
        this.setState(prevState => {
            return { showDropdown: !prevState.showDropdown };
        });
    }

    jumpTo = (id) => {
        document.getElementById(id).scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
        this.toggleDropdown(false);
    }

    render() {
        return <div className="NavBar-container">
            {this.props.links.map((item, index) => {
                return <li key={index}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">{item.ico}</a>
                </li>
            })}
            <li className='bars' key={-1}>
                <a onClick={this.toggleDropdown}><FaBars /></a>
            </li>
            <div className={['drawer', this.state.showDropdown ? 'drawer-open' : ''].join(' ')}>
                <a onClick={() => this.jumpTo("about-me")}>About Me</a>
                <a onClick={() => this.jumpTo("personal-projects")}>Personal Projects</a>
                <a onClick={() => this.jumpTo("work-experience")}>Work Experience</a>
                <a onClick={() => this.jumpTo("contact")}>Contact</a>
            </div>
            {this.state.showDropdown ?
                <div className="backdrop" onClick={this.toggleDropdown} />
                : null}
        </div>;
    }
};

export default NavBar;
