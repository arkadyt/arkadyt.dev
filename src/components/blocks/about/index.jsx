import React from 'react';
import Section from 'components/shared/section';
import './styles.mobile.scss';

const AboutMe = props => {
  return (
    <Section id="about-me" title="About Me" {...props}>
        <div className="regular-text">
            <p>
                Hey there! My name is Andrew. I work as a Software Engineer at HP, here in Palo Alto. I work on everything related to designing and building highly available,
                failure resilient and secure distributed web applications in the cloud. I'll tell you more about myself in the following sections of this page.
            </p>
            <p>
                When I am not at work or hacking away at my personal hobby projects, I like to go out and shoot some NERF guns with my friends, go for a long stroll, hit the gym,
                shoot some hoops at the local basketball court, bike around the city at dawn, with nice tunes on, or go city hiking with my sister :)
            </p>
            <p>
                What brought me into technology? Many things! I have been coding since middle school and have been absolutely fascinated by computers and how much I could do with them!
                Level Design, 3D Art, Digital Sculpting, Audio Engineering, Shader Programming, Digital Art, Building Games on Unity, I did many things. Just for fun!
                Nowadays I am into big Software Engineering, Web Development and building Cloud Solutions. I also love Machine Learning and Robotics! Yes! Robotics and AI
                are one of the most fascinating areas of technology. Ever since I saw early videos of Boston Dynamics, their robots Atlas and Spot,
                I saw how much technology means for the world and how much we can achieve with it's help!
            </p>
        </div>
    </Section>
  );
};

export default AboutMe;
