import React from 'react';
import { jobs, links } from 'content';
import BigButton from 'components/shared/big-button';
import WexpCard from 'components/cards/experience';
import Section from 'components/shared/section';
import './styles.scss';
import './styles.mobile.scss';

const Experience = props => {
    return (
      <Section id="work-experience" title="Experience">
          <div className="wexpcard-view">
              {jobs.map((item, index) => {
                  const position = {
                      start: index === 0,
                      end: index === jobs.length - 1
                  }
                  return (
                      <WexpCard
                        noflip
                        {...item}
                        key={index}
                        {...position}
                        number={jobs.length - index}
                      />
                  );
              })}
          </div>
          <div className="view-more-row">
              <BigButton
                title="View My LinkedIn"
                href={links.linkedin.href}
                flat
                noRipple
                showShadow
              />
          </div>
      </Section>
    );
};

export default Experience;
