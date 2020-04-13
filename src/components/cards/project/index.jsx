import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import Image from 'components/shared/image';
import BigButton from 'components/shared/bigbutton';
import { goTo } from 'tools';
import clsx from 'clsx';
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import './styles.scss';

const ProjCard = props => {
    const { title, description, tags, image, links } = props;
    const { theme } = useContext(ThemeContext);

    return (
        <div className={clsx("ProjCard-container", theme)}>
            <div className="frontface" onClick={() => goTo(links[0].href)}>
                <Image image={props.image} imgProps={{ alt: "Project Image" }} />
                <div className="description">
                    <h3>{title}</h3>
                    <span>{description}</span>
                    <div className="tags">
                        {tags.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                </div>
                <div className="hint"><IconHref /></div>
            </div>
            <div className="backface">
                {links.map((item, index) => (
                    <BigButton key={index} {...item} theme="l-theme" />
                ))}
            </div>
        </div>
    );
};

export default ProjCard;
