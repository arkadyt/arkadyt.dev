import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const NavLink = props => {
  const { href, ico, title } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx("NavLink-container", theme)}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className="link-icon">{ico}</span>
        <span className="link-text">{title}</span>
      </a>
    </div>
  );
};

export default NavLink;
