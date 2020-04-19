import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import Image from 'components/shared/image';
import { intro } from 'content';
import clsx from 'clsx';
import './styles.scss';

const Intro = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={clsx("Intro-container", theme)}>
            <Image
                image={intro.image}
                imgProps={{ alt: "Website background image" }}
                containerProps={{ className: clsx("Intro-background", theme) }}
            />
            <div className="name-block">
                <h1>Andrew</h1><h3>Titenko</h3><br />
                <span>Software Developer</span>
                <span>Cloud Solutions Architect</span>
            </div>
        </div>
    );
};

export default Intro;
