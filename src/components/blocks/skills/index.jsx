import React from 'react';
import { skills, awsSkills } from 'content';
import { useMobileDetector } from 'hooks';
import SkillCard from 'components/cards/skill';
import Section from 'components/shared/section';
import './styles.scss';
import './styles.mobile.scss';

const SkillGrid = props => {
    const { items, dummyWidth } = props;
    return (
        <div className="skills-view">
            {items.map((row, x) => (
                <div className="skills-row">
                    {row.map((skill, y) => (
                        skill === 'dummy'
                            ? <div style={{ width: dummyWidth }} />
                            : <SkillCard {...skill} key={`${x}-${y}`} />
                    ))}
                </div>
            ))}
        </div>
    );
};

const Skills = props => {
    const isMobile = useMobileDetector();
    const _skills = isMobile ? skills.mobile : skills.desktop;
    const _awsSkills = isMobile ? awsSkills.mobile : awsSkills.desktop;

    return (
        <Section id="skills" title="Skills" {...props} button="default">
            <div className="regular-text">
                <p>
                    My main areas of expertise include
                    React.js, Redux, CSS, HTML, SCSS, LESS, PWAs, Webpack and Workbox.js
                    on the frontend side, and
                    Node.js, MongoDB, Mongoose.js, Docker, Linux, BASH, Git and AWS (see below)
                    on the backend side.
                    Programming languages that I use are JavaScript, Python and Java.
                    I've also had extensive experince implementing software solutions using
                    GraphQL, Apollo, Relay, Kubernetes and Redis.
                </p>
            </div>
            <SkillGrid items={_skills} />
            <div className="regular-text">
                <p>
                    A big chunk of my day-to-day responsibilities at work includes working on distributed web applications,
                    edge software (edge computing), serverless applications, microservice solutions and various smaller
                    containerized apps, that are all hosted in AWS cloud. 
                    Following are AWS services that I'm most experienced in:
                </p>
            </div>
            <SkillGrid items={_awsSkills} dummyWidth="8rem" />
        </Section>
    );
};

export default Skills;
