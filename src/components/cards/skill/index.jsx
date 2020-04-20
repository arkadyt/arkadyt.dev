import React, { useContext } from 'react';
import clsx from 'clsx';
import ThemeContext from 'state/context/theme';
import Tooltip from 'components/shared/tooltip';
import './styles.scss';

const IMG_HEIGHT = 8;

const SkillCard = props => {
  const { icon, iconDark, title, wide, megaWide, ultraWide, height } = props;
  const { theme } = useContext(ThemeContext);
  const imgHeight = height ? height / 100 * IMG_HEIGHT : IMG_HEIGHT;
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
        style={{ height: `${imgHeight}rem` }} 
      />
      <Tooltip text={title} />
    </div>
  );
}

export default SkillCard;
