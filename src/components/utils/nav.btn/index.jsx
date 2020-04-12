import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import { FaBars, FaMoon } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';

const NavButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="NavButton-container">
      <button onClick={toggleTheme}>
        {theme === 'd-theme' ? <IoMdSunny /> : <FaMoon /> }
      </button>
    </div>
  );
};

export default NavButton;
