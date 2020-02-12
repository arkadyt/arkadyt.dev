import React from 'react';
import './Tooltip.css';

const Tooltip = props => {
  return (
    <div class="Tooltip-container">
      <span class="tooltiptext">{props.tooltip} TEEEXT</span>
    </div>
  )
}

export default Tooltip;
