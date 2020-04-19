import React, { useContext } from 'react';
import { FaRegCopyright as IconCopyright } from 'react-icons/fa';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const Footer = props => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx("Footer-container", theme)}>
        <div><IconCopyright /><span>Andrew Titenko 2020</span></div>
    </div>
  );
};

export default Footer;
