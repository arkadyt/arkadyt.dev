import React, { Fragment } from 'react';
import Section from 'components/shared/section';
import ProjCard from 'components/cards/project';
import { useMobileDetector } from 'hooks';
import { projects, links } from 'content';
import clsx from 'clsx';
import './styles.scss';
import './styles.mobile.scss';

const Projects = props => {
    const isProjCountOdd = projects.length % 2 > 0;
    const isMobile = useMobileDetector();
    const buttonProps = {
        title: "View All Projects",
        href: links.github.href
    }

    const desktopView = (
        <Fragment>
            <div className={clsx("projcard-view")}>
                {(isProjCountOdd ? projects.slice(0, -1) : projects).map((item, index) => (
                    <ProjCard {...item} key={index} flipDirection="rtl" />
                ))}
            </div>
            <div className={clsx("projcard-view", "horizontal")}>
                {/* If project card count is not odd, this div must still render,
                but must produce no visual effects on the page, and should have no padding and/or margins.
                A ghost! */}
                {!isProjCountOdd ? null : projects.slice(-1).map((item, index) => (
                    <ProjCard {...item} key={index} horizontal flipDirection="btu" />
                ))}
            </div>
        </Fragment>
    );
    const mobileView = (
        <div className={clsx("projcard-view")}>
            {projects.map((item, index) => (
                <ProjCard {...item} key={index} flipDirection="rtl" />
            ))}
        </div>
    );

    return (
        <Section id="personal-projects" title="Projects" {...props} button={buttonProps}>
            <div className="regular-text">
                <p>
                    Below are some solo projects of mine that I would consider most relevant in context of frontend and backend engineering.
                    However, if you'd like to see more, you can visit my GitHub by clicking "View all projects" button below.
                </p>
                {!isMobile ? null : (
                    <p style={{ color: "rgba(150, 0, 0, .75)" }}>
                        Small note for mobile users — some webpages are not optimized for mobile devices yet.
                        For best viewing experience, please visit them from a desktop or laptop screen.
                    </p>
                )}
            </div>
            {isMobile ? mobileView : desktopView}
        </Section>
    );
};

export default Projects;
