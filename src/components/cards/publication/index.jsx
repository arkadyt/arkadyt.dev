import React, { useContext } from 'react';
import clsx from "clsx";
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import ThemeContext from 'state/context/theme';
import { goTo } from 'tools';
import Image from 'components/utils/image';
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
            <span className="href-icon"><IconHref /></span>
            &nbsp;
            &nbsp;
            {title}
          </span>
          <span className="snippet">
            <span className="website-str">www.medium.com</span>
            &nbsp;
            •
            &nbsp;
            {snippet}
          </span>
        </div>
      </div>
      <div className="backface">
        <a href={href} target="_blank" rel="noopener noreferrer">
          GO TO THE ARTICLE <IconHref />
        </a>
      </div>
    </div>
  );
}

export default PublicationCard;
