import React from 'react';
import './Tooltip.css';

const Tooltip = props => {
  return (
    <div class="Tooltip-container">
      <span class="tooltiptext">{props.text}</span>
    </div>
  )
}

export default Tooltip;
