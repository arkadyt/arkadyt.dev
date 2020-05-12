import React, { useContext } from 'react';
import { CardContext } from '..';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const CardFace = props => {
    const { type, onClick, children } = props;
    const { flat } = useContext(CardContext);
    const { theme } = useContext(ThemeContext);

    // enforce naming convention
    if (!["frontface", "backface"].includes(type)) {
        throw new Error("Wrong face type specified");
    }

    return (
        <div className={clsx("Card-face", type, theme, flat && 'flat')} onClick={onClick}>
            {children}
        </div>
    );
};

export default CardFace;
