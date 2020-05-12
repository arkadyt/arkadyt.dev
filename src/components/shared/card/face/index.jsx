import React, { useContext } from 'react';
import { CardContext } from '..';
import { useMobileDetector } from 'hooks';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const CardFace = props => {
    const { type, children } = props;
    const { flat, setFlipped } = useContext(CardContext);
    const { theme } = useContext(ThemeContext);
    const isMobile = useMobileDetector();

    // enforce naming convention
    if (!["frontface", "backface"].includes(type)) {
        throw new Error("Wrong face type specified");
    }

    const onFaceClick = () => {
        if (isMobile) {
            if (type === "frontface") {
                setFlipped(true);
            } else if (type === "backface") {
                setFlipped(false);
            }
        }
    }

    return (
        <div className={clsx("Card-face", type, theme, flat && 'flat')} onClick={onFaceClick}>
            {children}
        </div>
    );
};

export default CardFace;
