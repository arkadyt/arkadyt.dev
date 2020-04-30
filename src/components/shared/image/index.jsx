import React from 'react';

const Image = props => {
    const { image={}, containerProps, imgProps } = props;
    return (
        <picture {...containerProps}>
          {image.primary && <source type="image/webp" srcSet={image.primary} />}
          {image.fallback && <img src={image.fallback} {...imgProps} alt="" />}
        </picture>
    );
};

export default Image;
