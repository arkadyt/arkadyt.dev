import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import NavButton from 'components/utils/nav.btn';
import clsx from 'clsx';
import './styles.scss';

const NavBar = props => {
  const { links } = props;
  const { theme } = useContext(ThemeContext);
  const classes = clsx('NavBar-container', theme);

  return (
    <div className={classes}>
      <ul className="sidebar-links">
        {links.map((item, index) => (
          <li key={index} className="sidebar-link">
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <span class="link-icon">{item.ico}</span>
              <span className="link-text">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="sidebar-buttons">
        <NavButton />
      </ul>
    </div>
  )
};

export default NavBar;
