import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import Image from 'components/shared/image';
import BigButton from 'components/shared/big-button';
import { Container as Card, Face } from 'components/shared/card';
import { goTo } from 'tools';
import clsx from 'clsx';
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import './styles.scss';
import './styles.mobile.scss';

const ProjCard = props => {
    const { title, description, tags, image, links, horizontal } = props;
    const { theme } = useContext(ThemeContext);

    return (
        <Card className={clsx("ProjCard-container", theme, horizontal && 'horizontal')}>
            <Face type="frontface" onClick={() => goTo(links[0].href)}>
                <Image image={image} imgProps={{ alt: "Project Image" }} />
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
            </Face>
            <Face type="backface">
                {links.map((item, index) => (
                    <BigButton key={index} {...item} theme="l-theme" />
                ))}
            </Face>
        </Card>
    );
};

export default ProjCard;
