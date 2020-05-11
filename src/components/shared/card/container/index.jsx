import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import StyleContext from 'state/context/style';
import clsx from 'clsx';
import './styles.scss';

const CardContainer = props => {
    const { children, noflip, flat, className: containerClasses } = props;
    const { theme } = useContext(ThemeContext);

    return (
        <StyleContext.Provider value={{ flat }}>
            <div className={clsx(containerClasses, "Card-container", theme, noflip && 'noflip')}>
                {children}
            </div>
        </StyleContext.Provider>
    );
};

export default CardContainer;
