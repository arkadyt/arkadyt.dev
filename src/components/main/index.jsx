import React, { Component, useContext, Fragment } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

import NavBar from 'components/navbar';
import Intro from 'components/blocks/intro';
import AboutMe from 'components/blocks/about';
import Experience from 'components/blocks/experience';
import Skills from 'components/blocks/skills';
import Projects from 'components/blocks/projects';
import Publications from 'components/blocks/publications';
import Contact from 'components/blocks/contact';
import Footer from 'components/blocks/footer';

const Layout = props => {
    const { theme } = useContext(ThemeContext);
    return (
        <Fragment>
            <NavBar />
            <div className={clsx("Layout-content", theme)}>
                <Intro />
                <AboutMe />
                <Experience />
                <Skills />
                <Projects />
                <Publications />
                <Contact />
                <Footer />
            </div>
        </Fragment>
    );
};

export default Layout;
