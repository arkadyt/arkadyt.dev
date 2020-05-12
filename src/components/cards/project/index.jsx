import React from 'react';
import { useMobileDetector } from 'hooks';
import Image from 'components/shared/image';
import BigButton from 'components/shared/big-button';
import { Container as Card, Face } from 'components/shared/card';
import clsx from 'clsx';
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import './styles.scss';
import './styles.mobile.scss';

const ProjCard = props => {
    const { title, description, tags, image, links, horizontal, ...rest } = props;
    const isMobile = useMobileDetector();

    return (
        <Card className={clsx("ProjCard-container", horizontal && 'horizontal')} flat={isMobile} {...rest}>
            <Face type="frontface">
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
