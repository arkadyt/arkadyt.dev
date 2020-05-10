import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import BigButton from 'components/shared/big-button';
import clsx from 'clsx';
import './styles.scss';
import './styles.mobile.scss';

const ensurePlural = (count, singularForm) => {
    if (count > 1) return `${count} ${singularForm}s`;
    else return `${count} ${singularForm}`;
}

const appendLongevity = str => {
    try {
        const split = str.split('—').map(el => el.trim());
        split[0] = new Date(`1 ${split[0]}`);

        if (split[1].toLowerCase() === "present") {
            split[1] = new Date();
        } else {
            split[1] = new Date(`1 ${split[1]}`);
        }

        let longevity = Math.ceil((split[1] - split[0]) / 1000 / 60 / 60 / 24 / 30);
        if (longevity > 12) {
            let years = Math.floor(longevity / 12);
            return `${str} (${ensurePlural(years, 'yr')}. and ${ensurePlural(longevity % 12, 'mo')}.)`;
        } else {
            return `${str} (${ensurePlural(longevity, 'mo')}.)`;
        }
    } catch (e) {
        console.error('Could not parse date string!', e);
        return str;
    }
};

const WexpCard = props => {
    const { date, company, title, number, noflip } = props;
    const { theme } = useContext(ThemeContext);
    const { image, imageDark } = props;
    const jobIcon = theme === 'd-theme' && imageDark ? imageDark : image;

    return (
        <div className={clsx("WexpCard-container", theme, noflip && 'noflip')}>
            <div className="frontface">
                <div className="colored-block">
                    <div className="colored-chunk" />
                    <div className="number-base">
                        <span className="number">{number}</span>
                    </div>
                </div>
                <img src={jobIcon} alt='' />
                <div className="text">
                    <h4>{appendLongevity(date)}</h4>
                    <h2>{company}</h2>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="backface">
                <BigButton title="View more" onClick={() => {}} theme="l-theme" />
            </div>
        </div>
    );
};

export default WexpCard;
