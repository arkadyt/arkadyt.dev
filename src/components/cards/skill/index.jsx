import React from 'react';
import Tooltip from '../Tooltip/Tooltip.jsx';
import './styles.scss';

const SkillCard = props => {
  const { icon, title, wide, megaWide, ultraWide, height } = props;
  const classes = [
    "SkillCard-container",
    wide ? "two-cell" : megaWide ? "three-cell" : ultraWide ? "four-cell" : "",
  ];

  return (
    <div className={classes.join(" ")}>
      <img alt={title} src={icon} style={{ height: `${height}%` }} />
      <Tooltip text={title} />
    </div>
  );
}

export default SkillCard;
