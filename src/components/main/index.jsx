import React, { useContext, Fragment } from 'react';
import ThemeContext from 'state/context/theme';
import { isMobile } from 'tools';
import clsx from 'clsx';
import './styles.scss';
import './styles.mobile.scss';

import NavBar from 'components/navbar';
import Header from 'components/blocks/header';
import AboutMe from 'components/blocks/about';
import Experience from 'components/blocks/experience';
import Skills from 'components/blocks/skills';
import Projects from 'components/blocks/projects';
import Publications from 'components/blocks/publications';
import Footer from 'components/blocks/footer';

const Layout = props => {
    const { theme } = useContext(ThemeContext);
    return (
        <Fragment>
            {isMobile() ? null : <NavBar />}
            <div className={clsx("Layout-content", theme)}>
                <Header />
                <div className="content-body">
                    <AboutMe />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Publications />
                </div>
                <Footer />
            </div>
        </Fragment>
    );
};

export default Layout;
