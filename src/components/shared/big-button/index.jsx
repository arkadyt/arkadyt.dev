import React, { useContext } from 'react';
import clsx from 'clsx';
import ThemeContext from 'state/context/theme';
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import { goTo } from 'tools';
import './styles.scss';

const BigButton = props => {
  const { title, href, onClick, theme, showShadow, noExplosion } = props;
  const { theme: ctxTheme } = useContext(ThemeContext);
  const clickFn = (typeof onClick === "function" && onClick)
    || goTo.bind(null, href);

  return (
    <div className={clsx("BigButton-container", theme || ctxTheme, noExplosion && 'no-explosion')}>
      <button className={clsx(showShadow && "show-shadow")} onClick={clickFn}>
        {title}
        {href ? <span>&nbsp;&nbsp;<IconHref /></span> : null}
      </button>
    </div>
  );
};

export default BigButton;
