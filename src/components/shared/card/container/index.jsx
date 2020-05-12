import React, { useContext, useState } from 'react';
import ThemeContext from 'state/context/theme';
import { useMobileDetector } from 'hooks';
import clsx from 'clsx';
import './styles.scss';

const CardContext = React.createContext({});

const CardContainer = props => {
    const { children, noflip, flipDirection, flat, className } = props;
    const { theme } = useContext(ThemeContext);
    const [ flipped, setFlipped ] = useState(false);

    const classNames = [
        className, "Card-container", theme, noflip && 'noflip',
        typeof flipDirection === "string" && `flip-direction--${flipDirection}`,
        flipped && 'flipped'
    ];

    const isMobile = useMobileDetector();
    const updateFlipStatus = e => {
        console.log('updating...')
    };

    return (
        <CardContext.Provider value={{ flat, updateFlipStatus }}>
            <div className={clsx(...classNames)} onMouseEnter={updateFlipStatus} onMouseLeave={updateFlipStatus}>
                {children}
            </div>
        </CardContext.Provider>
    );
};

export { CardContext };
export default CardContainer;
