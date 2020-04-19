import React from 'react';
import { jobs } from 'content';
import WexpCard from 'components/cards/experience';
import Section from 'components/shared/section';
import './styles.scss';

const Experience = props => {
  return (
    <Section id="work-experience" title="Experience">
        <div className="wexpcard-view">
            {jobs.map((item, index) => {
                const position = {
                    start: index === 0,
                    end: index === jobs.length - 1
                }
                return <WexpCard {...item} key={index} {...position} number={jobs.length - index} />
            })}
        </div>
    </Section>
  );
};

export default Experience;
