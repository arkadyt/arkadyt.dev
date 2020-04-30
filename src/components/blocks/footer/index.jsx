import React, { useContext } from 'react';
import { FaRegCopyright as IconCopyright } from 'react-icons/fa';
import ThemeContext from 'state/context/theme';
import Contact from 'components/blocks/contact';
import clsx from 'clsx';
import './styles.scss';
import './styles.mobile.scss';

const Footer = props => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={clsx("Footer-container", theme)}>
            <div className="footer-content">
                <Contact />
                <div className="footer">
                    <div><IconCopyright /><span>Andrew Titenko 2020</span></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
