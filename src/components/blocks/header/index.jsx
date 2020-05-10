import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import Image from 'components/shared/image';
import { header } from 'content';
import clsx from 'clsx';
import './styles.scss';
import './styles.mobile.scss';

const Header = (props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={clsx("Header-container", theme)}>
            <Image
                image={header.image}
                imageMobile={header.imageMobile}
                imgProps={{ alt: "Website background image" }}
                containerProps={{ className: clsx("Header-background", theme) }}
            />
            <div className="shadow-gradient" />
            <div className="blending-gradient" />
            <div className="name-block">
                <h1>Andrew</h1><h3>Titenko</h3><br />
                <span>Software Developer</span>
                <span>Cloud Solutions Architect</span>
            </div>
        </div>
    );
};

export default Header;
