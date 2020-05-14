import React from 'react';
import Section from 'components/shared/section';
import './styles.mobile.scss';

const AboutMe = props => {
  return (
    <Section id="about-me" title="About Me" {...props}>
      <div className="regular-text">
        <p>
          Highly qualified Software Engineer and Cloud Solutions Architect with a broad set of skills
          in areas of Software Development, Design of Resilient, Operationally Excellent Applications
          and Secure Cloud Infrastructures. 
          With many years of experience in the Information Technology market of providing enterprise
          solutions using various technologies, platforms, and programming languages.
          Possesses deep analytical, critical thinking, problem-solving, and leadership skills.
          Focused on efficiency, quality, security, and delivering business features on time.
        </p>
      </div>
    </Section>
);
};

export default AboutMe;
