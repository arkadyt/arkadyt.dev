import React, { useContext } from 'react';
import clsx from 'clsx';
import ThemeContext from 'state/context/theme';
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import './styles.scss';

const BigButton = props => {
  const { title, href } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <a className={clsx("RippleLink-link", theme)} href={href} target="_blank" rel="noopener noreferrer">
        {title}&nbsp;&nbsp;<IconHref />
    </a>
  );
};

export default BigButton;
