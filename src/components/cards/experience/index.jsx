import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import BigButton from 'components/shared/bigbutton';
import clsx from 'clsx';
import './styles.scss';

/**
 * Work experience card.
 */
const WexpCard = props => {
    const { imgWidth, date, company, title, number } = props;
    const { theme } = useContext(ThemeContext);
    const { image, imageDark } = props;
    const jobIcon = theme === 'd-theme' && imageDark ? imageDark : image;

    return (
        <div className={clsx("WexpCard-container", theme)}>
            <div className="frontface">
                <div className="colored-block">
                    <div className="colored-chunk" />
                    <div className="number-base">
                        <span className="number">{number}</span>
                    </div>
                </div>
                <img src={jobIcon}
                     style={{ width: `${imgWidth}%`, color: 'white' }} 
                     alt='' />
                <div className="text">
                    <h4>{date}</h4>
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
