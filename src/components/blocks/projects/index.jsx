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
                    Below are the solo projects of mine that I consider most relevant in the context of frontend and backend engineering,
                    development of cloud solutions and working with MERN development stack.
                </p>
                <p>
                    There are however many other projects that I've worked on throughout the years.
                    Majority of them is hosted on my GitHub profile, so if you're interested, click on the "VIEW ALL PROJECTS" button below!
                </p>
                {!isMobile ? null : (
                    <p style={{ color: "rgba(150, 0, 0, .75)" }}>
                        A small note for mobile viewers: some project websites are not yet optimized for vertical layouts and mobile devices with smaller screens!
                        I apologize for this inconvenience and recommend you to view the pages in the landscape mode or from a desktop screen! Thank you!
                    </p>
                )}
            </div>
            {isMobile ? mobileView : desktopView}
        </Section>
    );
};

export default Projects;
