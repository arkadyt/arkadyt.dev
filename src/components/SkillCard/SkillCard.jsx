import React from 'react';
import Tooltip from '../Tooltip/Tooltip.jsx';
import './SkillCard.css';

const SkillCard = props => {
  const { icon, title, wide } = props;
  const classes = [
    "SkillCard-container",
    wide ? "two-cell" : ""
  ];

  return (
    <div className={classes.join(" ")}>
      <img alt='' src={icon} />
      <Tooltip text={title} />
    </div>
  );
}

export default SkillCard;
