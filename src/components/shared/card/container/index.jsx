import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const CardContainer = props => {
    const { children, noflip, className: containerClasses } = props;
    const { theme } = useContext(ThemeContext);

    return (
        <div className={clsx(containerClasses, "Card-container", theme, noflip && 'noflip')}>
            {children}
        </div>
    );
};

export default CardContainer;
