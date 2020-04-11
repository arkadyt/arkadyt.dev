import React, { useContext } from 'react';
import clsx from "clsx";
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import ThemeContext from 'state/context/theme';
import Image from 'components/utils/image';
import "./styles.scss";

const PublicationCard = props => {
  const { image, title, snippet, href } = props;
  const { theme } = useContext(ThemeContext);
  // const websiteStr = href.match(/^https?:\/\/([a-z]+\.[a-z]+/)[0];

  return (
    <div className={clsx("PublicationCard-container", theme)}>
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
  );
}

export default PublicationCard;
