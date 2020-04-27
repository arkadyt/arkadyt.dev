import React, { useContext } from 'react';
import ProximityDetector from 'components/shared/proximity-detector';
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
  const proximitySelectors = [
    '.sidebar-links div:last-child',
    '.sidebar-buttons'
  ];

  return (
    <ProximityDetector lip={1.10} selectors={proximitySelectors}>
      {areOverlapping => (
        <div className={classes}>
          <div className="sidebar-links">
            {Object.values(links).map((item, index) => (
              <NavLink key={index} {...item} notext={areOverlapping} />
            ))}
          </div>
          <div className="sidebar-buttons">
            <NavButton onClick={() => toggleTheme()}>
              {theme === 'd-theme' ? <IoMdSunny /> : <FaMoon />}
            </NavButton>
          </div>
        </div>
      )}
    </ProximityDetector>
  )
};

export default NavBar;
