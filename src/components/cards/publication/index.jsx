import React, { useContext } from 'react';
import clsx from "clsx";
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import ThemeContext from 'state/context/theme';
import BigButton from 'components/shared/big-button';
import { goTo } from 'tools';
import Image from 'components/shared/image';
import "./styles.scss";

const PublCard = props => {
  const { image, title, href } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx("PublCard-container", theme)}>
      <div className="frontface" onClick={() => goTo(href)}>
        <Image
          image={image}
          containerProps={{ className: "card-image" }}
        />
        <div className="content">
          <span className="title">
            {title}
            &nbsp;
            &nbsp;
            <span className="href-icon"><IconHref /></span>
          </span>
        </div>
      </div>
      <div className="backface">
        <BigButton href={href} title="Go to the Article" theme="l-theme" />
      </div>
    </div>
  );
}

export default PublCard;
