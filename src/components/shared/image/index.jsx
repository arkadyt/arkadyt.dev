import React from 'react';

const Image = props => {
    const { image={}, imageMobile={}, containerProps, imgProps } = props;

    return (
        <picture {...containerProps}>
            {imageMobile.primary && (
                <source
                    type="image/webp"
                    media="(orientation: portrait)"
                    srcSet={imageMobile.primary}
                />
            )}
            {imageMobile.fallback && (
                <source
                    type="image/jpeg"
                    media="(orientation: portrait)"
                    srcSet={imageMobile.fallback}
                />
            )}
            {image.primary && (
                <source
                    type="image/webp"
                    srcSet={image.primary}
                />
            )}
            {image.fallback && (
                <img
                    src={image.fallback} {...imgProps}
                    alt=""
                />
            )}
        </picture>
    );
};

export default Image;
