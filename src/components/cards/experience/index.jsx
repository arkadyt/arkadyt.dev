import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import BigButton from 'components/shared/bigbutton';
import clsx from 'clsx';
import './styles.scss';

/**
 * Work experience card.
 */
const ExpCard = props => {
    const separatorClass = props.start && props.end ? 'stick-hidden' :
        props.start ? 'stick-start' :
            props.end ? 'stick-end' :
                '';
    const { theme } = useContext(ThemeContext);
    const { image, imageDark } = props;
    const jobIcon = theme === 'd-theme' && imageDark ? imageDark : image;

    return (
        <div className={clsx("ExpCard-container", theme)}>
            <div className="frontface">
                <img src={jobIcon}
                     style={{ width: `${props.imgWidth}%`, color: 'white' }} 
                     alt='' />
                <div className={clsx("Separator-container", theme)}>
                    <div className={['stick', separatorClass].join(' ')} />
                    <div className="circle" />
                </div>
                <div className="text">
                    <h4>{props.date}</h4>
                    <h2>{props.company}</h2>
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className="backface">
                <BigButton title="View more" onClick={() => {}} />
            </div>
        </div>
    );
};

export default ExpCard;
