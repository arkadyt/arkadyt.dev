import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const NavButton = props => {
  const { onClick, children } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx("NavButton-container", theme)}>
      <button onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default NavButton;
