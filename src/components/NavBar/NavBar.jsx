import React from 'react'
import './NavBar.css'
import { FaBars } from 'react-icons/fa'

class NavBar extends React.Component {
  state = {
    showDropdown: false,
    showNavBar: false // for mobiles only
  }

  toggleDropdown = state => {
    this.setState(prevState => ({ showDropdown: state || !prevState.showDropdown }))
  }

  toggleNavBar = state => {
    this.setState(prevState => ({ showNavBar: state || !prevState.showNavBar }))
  }

  jumpTo = id => {
    document.getElementById(id).scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" })
    this.toggleDropdown(false)
  }

  handleScroll = () => {
    if (window.innerHeight > window.innerWidth) {
      const currScroll = window.scrollY
      const threshold = window.innerHeight * 2 / 3

      if (currScroll > threshold && !this.state.showNavBar) {
        this.toggleNavBar(true)
      } else if (currScroll < threshold && this.state.showNavBar) {
        this.toggleNavBar(false)
      }
    }
  }

  render() {
    return (
      <div className={['NavBar-container', this.state.showNavBar ? '' : 'hidden'].join(' ')}>
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
        {this.state.showDropdown
          ? <div className="backdrop" onClick={this.toggleDropdown} />
          : null}
      </div>
    )
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
}

export default NavBar
