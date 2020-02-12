import React from 'react';
import Tooltip from '../Tooltip/Tooltip.jsx';
import './SkillCard.scss';

const SkillCard = props => {
  return (
    <div class="SkillCard-container">
      <img alt='' src={props.icon} />
      <Tooltip text={props.tooltip} />
    </div>
  );
}

export default SkillCard;
