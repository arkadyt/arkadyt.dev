import React, { useContext } from 'react';
import clsx from 'clsx';
import ThemeContext from 'state/context/theme';
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import { goTo } from 'tools';
import './styles.scss';
import './styles.mobile.scss';

const BigButton = props => {
  const { title, href, onClick, theme, noRipple, flat } = props;
  const { theme: ctxTheme } = useContext(ThemeContext);
  const clickFn = (typeof onClick === "function" && onClick)
    || goTo.bind(null, href);

  const containerClasses = clsx(
    "BigButton-container",
    theme || ctxTheme,
    noRipple && "no-ripple",
  );
  const btnClasses = clsx(
    flat ? "flat" : "show-shadow"
  );

  return (
    <div className={containerClasses}>
      <button className={btnClasses} onClick={clickFn}>
        {title}
        {href ? <span>&nbsp;&nbsp;<IconHref /></span> : null}
      </button>
    </div>
  );
};

export default BigButton;
