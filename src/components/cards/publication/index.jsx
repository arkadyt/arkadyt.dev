import React, { useContext } from 'react';
import clsx from "clsx";
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import ThemeContext from 'state/context/theme';
import BigButton from 'components/shared/bigbutton';
import { goTo } from 'tools';
import Image from 'components/shared/image';
import "./styles.scss";

const PublicationCard = props => {
  const { image, title, snippet, href } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx("PublicationCard-container", theme)}>
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
        <BigButton href={href} title="Go to the Article" />
      </div>
    </div>
  );
}

export default PublicationCard;
