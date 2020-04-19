import React from 'react';
import Section from 'components/shared/section';
import ProjCard from 'components/cards/project';
import BigButton from 'components/shared/bigbutton';
import { projects, links } from 'content';
import clsx from 'clsx';
import './styles.scss';

const Projects = props => {
  const isProjCountOdd = projects.length % 2 > 0;

  return (
    <Section id="personal-projects" title="Projects">
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
        <div className="view-more-row">
            <BigButton title="View more projects" href={links.github.href} showShadow />
        </div>
    </Section>
  );
};

export default Projects;
