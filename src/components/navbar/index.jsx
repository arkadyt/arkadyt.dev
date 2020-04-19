import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import { FaMoon } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';
import NavButton from './button';
import NavLink from './link';
import clsx from 'clsx';
import { links } from 'content';
import './styles.scss';

const NavBar = props => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const classes = clsx('NavBar-container', theme);

  return (
    <div className={classes}>
      <ul className="sidebar-links">
        {Object.values(links).map((item, index) => (
          <NavLink key={index} {...item} />
        ))}
      </ul>
      <ul className="sidebar-buttons">
        <NavButton onClick={() => toggleTheme()}>
          {theme === 'd-theme' ? <IoMdSunny /> : <FaMoon />}
        </NavButton>
      </ul>
    </div>
  )
};

export default NavBar;
