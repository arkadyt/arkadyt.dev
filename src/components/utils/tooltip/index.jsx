import React from 'react';
import './styles.scss';

const Tooltip = props => {
  return (
    <div className="Tooltip-container">
      <div className="arrow-box top tooltip-elements" />
      <span className="tooltip-body tooltip-elements">{props.text}</span>
    </div>
  )
}

export default Tooltip;
