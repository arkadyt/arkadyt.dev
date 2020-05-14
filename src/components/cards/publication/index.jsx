import React from 'react';
import clsx from "clsx";
import { FaExternalLinkAlt as IconHref } from 'react-icons/fa';
import BigButton from 'components/shared/big-button';
import { Container as Card, Face } from 'components/shared/card';
import { useMobileDetector } from 'hooks';
import { ellipsizeText } from 'tools';
import { FaMedium as IconMedium } from 'react-icons/fa';
import "./styles.scss";
import "./styles.mobile.scss";

const PublCard = props => {
    const { title, href, ...rest } = props;
    const isMobile = useMobileDetector();

    return (
        <Card className={clsx("PublCard-container")} flat={isMobile} {...rest}>
            <Face type="frontface">
                <div className="number-block">
                    <span className="number"><IconMedium/></span>
                </div>
                <div className="content">
                    <span className="title">
                        {isMobile ? ellipsizeText(title, 72) : title}
                        &nbsp;
                        &nbsp;
                        <span className="href-icon"><IconHref /></span>
                    </span>
                </div>
            </Face>
            <Face type="backface">
                <BigButton href={href} title="Go to the Article" theme="l-theme" />
            </Face>
        </Card>
    );
}

export default PublCard;
