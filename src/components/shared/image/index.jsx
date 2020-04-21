import React from 'react';

const Image = props => {
    const { image={}, containerProps, imgProps } = props;
    return (
        <picture {...containerProps}>
          {image.webp && <source type="image/webp" srcSet={image.webp} />}
          {image.fallback && <img src={image.fallback} {...imgProps} alt="" />}
        </picture>
    );
};

export default Image;
