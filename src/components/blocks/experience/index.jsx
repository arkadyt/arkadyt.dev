import React from 'react';
import ExpCard from 'components/cards/experience';
import Section from 'components/shared/section';
import './styles.scss';
import './styles.mobile.scss';

const Experience = props => {
    const { title, items } = props;

    return (
      <Section id="experience" title={title} {...props} button="default">
          <div className="expcard-view">
              {items.map((item, index) => {
                  const position = {
                      start: index === 0,
                      end: index === items.length - 1
                  }
                  return (
                      <ExpCard
                        noflip
                        {...item}
                        key={index}
                        {...position}
                        number={items.length - index}
                      />
                  );
              })}
          </div>
      </Section>
    );
};

export default Experience;
