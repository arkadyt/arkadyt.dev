import React, { useContext } from 'react';
import clsx from 'clsx';
import { useMobileDetector } from 'hooks';
import ThemeContext from 'state/context/theme';
import Tooltip from 'components/shared/tooltip';
import './styles.scss';

/**
 * This is not a standard card, hence it's not using the shared Card wrapper.
 */
const SkillCard = props => {
  const isMobile = useMobileDetector();
  const IMG_HEIGHT = isMobile ? 6 : 9;

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
