import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const Tooltip = props => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={clsx("Tooltip-container", theme)}>
      <div className="arrow-box top tooltip-elements" />
      <span className="tooltip-body tooltip-elements">{props.text}</span>
    </div>
  );
};

export default Tooltip;
