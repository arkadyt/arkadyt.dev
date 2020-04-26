import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from 'state/context/theme';
import { FaMoon } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';
import NavButton from './button';
import NavLink from './link';
import clsx from 'clsx';
import { links } from 'content';
import './styles.scss';

/**
 * Point at which nav links start overlapping with nav buttons.
 * Depends on content length of both.
 */
const OVERLAP_POINT = "(max-height: 42rem)";

const NavBar = props => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const classes = clsx('NavBar-container', theme);
  const [ isWindowShort, setIsShort ] = useState(
    window.matchMedia(OVERLAP_POINT).matches
  );

  useEffect(() => {
    window
      .matchMedia(OVERLAP_POINT)
      .addListener(e => setIsShort(e.matches));
  }, []);

  return (
    <div className={classes}>
      <ul className="sidebar-links">
        {Object.values(links).map((item, index) => (
          <NavLink key={index} {...item} notext={isWindowShort} />
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
