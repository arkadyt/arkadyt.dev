import React from 'react';
import Tooltip from '../Tooltip/Tooltip.jsx';
import './SkillCard.css';

const SkillCard = props => {
  return (
    <div class="SkillCard-container">
      <img alt='' src={props.icon} />
      <Tooltip text={props.title} />
    </div>
  );
}

export default SkillCard;
