import React, { Fragment } from 'react';
import Section from 'components/shared/section';
import ProjCard from 'components/cards/project';
import BigButton from 'components/shared/big-button';
import { useMobileDetector } from 'hooks';
import { projects, links } from 'content';
import clsx from 'clsx';
import './styles.scss';
import './styles.mobile.scss';

const Projects = props => {
  const isProjCountOdd = projects.length % 2 > 0;
  const isMobile = useMobileDetector();
  const desktopView = (
      <Fragment>
          <div className={clsx("projcard-view")}>
              {(isProjCountOdd ? projects.slice(0, -1) : projects).map((item, index) => (
                  <ProjCard {...item} key={index} />
              ))}
          </div>
          <div className={clsx("projcard-view", "horizontal")}>
              {/* 
                  If project card count is not odd, this div must still render,
                  but must make no visual effects on the page, and should have no padding and/or margins.
                  A ghost!
              */}
              {!isProjCountOdd ? null : projects.slice(-1).map((item, index) => (
                  <ProjCard {...item} key={index} horizontal />
              ))}
          </div>
      </Fragment>
  );
  const mobileView = (
      <div className={clsx("projcard-view")}>
          {projects.map((item, index) => (
              <ProjCard {...item} key={index} />
          ))}
      </div>
  );

  return (
    <Section id="personal-projects" title="Projects" {...props}>
        <div className="regular-text">
            <p>
                Below are the solo projects of mine that I consider most relevant in the context of frontend and backend engineering,
                development of cloud solutions and working with MERN development stack.
            </p>
            <p>
                There are however many other projects that I've worked on throughout the years.
                Majority of them is hosted on my GitHub profile, so if you're interested, click on the "VIEW MORE PROJECTS" button below!
            </p>
        </div>
        {isMobile ? mobileView : desktopView}
        <div className="view-more-row">
            <BigButton
              title="View All Projects"
              href={links.github.href}
              flat
              noRipple
              showShadow
            />
        </div>
    </Section>
  );
};

export default Projects;
