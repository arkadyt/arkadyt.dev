import React, { Fragment, useContext } from 'react';
import ThemeContext from 'state/context/theme';
import { useMobileDetector } from 'hooks';
import BigButton from 'components/shared/big-button';
import { Container as Card, Face } from 'components/shared/card';
import clsx from 'clsx';
import './styles.scss';
import './styles.mobile.scss';

const ensurePlural = (count, singularForm) => {
    if (count > 1) return `${count} ${singularForm}s`;
    else return `${count} ${singularForm}`;
}

/**
 * Parses the date string and adds the total longevity of the term in a human readable form.
 */
const parseDateString = str => {
    try {
        const split = str.split('—').map(el => el.trim());
        split[0] = new Date(`1 ${split[0]}`);

        if (split[1].toLowerCase() === "present") {
            split[1] = new Date();
        } else {
            split[1] = new Date(`1 ${split[1]}`);
        }

        let longevity = Math.ceil((split[1] - split[0]) / 1000 / 60 / 60 / 24 / 30);
        if (isNaN(longevity)) throw new Error("Value is NaN");

        if (longevity >= 12) {
            let years = Math.floor(longevity / 12);
            let months = longevity % 12;
            return (
                <span>
                    {str}&nbsp;&#x2022;&nbsp;
                    {ensurePlural(years, 'yr')}
                    &nbsp;
                    {months ? ensurePlural(months, 'mo') : null}
                </span>
            );
        } else {
            return (
                <span>
                    {str}&nbsp;&#x2022;&nbsp;
                    {ensurePlural(longevity, 'mo')}
                </span>
            );
        }
    } catch (e) {
        console.error('Could not parse date string!', e);
        return str;
    }
};

const Subtitle = props => {
    const { subtitle } = props;
    const isMobile = useMobileDetector();

    const getDesktopVer = () => {
        return subtitle.map((entry, i) => {
            const separator = <Fragment>&nbsp;&nbsp;&#x2022;&nbsp;&nbsp;</Fragment>;
            return <Fragment>{i > 0 ? separator : null}{entry}</Fragment>;
        }); 
    };
    const getMobileVer = () => {
        return subtitle.map(entry => (
            <div>{entry}</div>
        ));
    };

    return (
        <span className="subtitle">
            {Array.isArray(subtitle)
                ? isMobile ? getMobileVer() : getDesktopVer()
                : subtitle
            }
        </span>
    );
};

const ExpCard = props => {
    const { date, title, subtitle, subtitleMobile, noLongevity, number, ...rest } = props;
    const { theme } = useContext(ThemeContext);
    const isMobile = useMobileDetector();
    const { image, imageDark } = props;
    const jobIcon = theme === 'd-theme' && imageDark ? imageDark : image;
    const _subtitle = isMobile && subtitleMobile ? subtitleMobile : subtitle;
    const frFaceCls = clsx(Array.isArray(_subtitle) && `taller-${_subtitle.length}`);

    return (
        <Card className="WexpCard-container" flat={isMobile} {...rest}>
            <Face type="frontface" className={frFaceCls}>
                <div className="colored-block">
                    <div className="colored-chunk" />
                    <div className="number-base">
                        <span className="number">{number}</span>
                    </div>
                </div>
                <img src={jobIcon} alt='' />
                <div className="text">
                    <span className="date">{noLongevity ? date : parseDateString(date)}</span>
                    <span className="title">{title}</span>
                    <Subtitle subtitle={_subtitle} />
                </div>
            </Face>
            <Face type="backface">
                <BigButton title="View more" onClick={() => {}} theme="l-theme" />
            </Face>
        </Card>
    );
};

export default ExpCard;
