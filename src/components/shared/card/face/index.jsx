import React from 'react';
import clsx from 'clsx';

const CardFace = props => {
    const { type, onClick, children } = props;

    return (
        <div className={clsx("Card-face", type)} onClick={onClick}>
            {children}
        </div>
    );
};

export default CardFace;
