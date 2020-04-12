import React, { useContext } from 'react';
import clsx from 'clsx';
import ThemeContext from 'state/context/theme';
import Tooltip from 'components/utils/tooltip';
import './styles.scss';

const SkillCard = props => {
  const { icon, iconDark, title, wide, megaWide, ultraWide, height } = props;
  const { theme } = useContext(ThemeContext);
  const skillIcon = theme === "d-theme" && iconDark ? iconDark : icon;
  const classes = clsx(
    "SkillCard-container",
    wide ? "two-cell" : megaWide ? "three-cell" : ultraWide ? "four-cell" : "",
    theme
  );

  return (
    <div className={classes}>
      <img
        className="skill-img"
        alt={title}
        src={skillIcon}
        style={{ height: `${height}%` }} 
      />
      <Tooltip text={title} />
    </div>
  );
}

export default SkillCard;
