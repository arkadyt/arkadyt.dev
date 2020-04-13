import React, { Component, useContext } from 'react';
import ThemeContext from 'state/context/theme';
import Image from 'components/shared/image';
import clsx from 'clsx';
import './styles.scss';

import NavBar from 'components/navbar';
import Section from 'components/blocks/section';
import Card from 'components/cards/project';
import PublicationCard from 'components/cards/publication';
import ExpCard from 'components/cards/job';
import Front from 'components/blocks/intro';
import Link from 'components/shared/link';
import SkillCard from 'components/cards/skill';

import { 
    FaRegCopyright as IconCopyright 
} from 'react-icons/fa';

import { 
    publications, projects, jobs, 
    skills, awsSkills, links,
    about, intro
} from '../../content';

class Layout extends Component {
    render() {
        const { theme } = this.context;

        return (
            <React.Fragment>
                <Image
                    image={intro.image}
                    imgProps={{ alt: "Website background image" }}
                    containerProps={{ className: clsx("Layout-background", theme) }}
                />
                <NavBar links={links} />
                <div className={clsx("Layout-content", theme)}>
                    <Front />
                    <Section id="about-me" title="About Me">
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
                    <Section id="work-experience" title="Experience">
                        <div className="wexp-view">
                            {jobs.map((item, index) => {
                                const position = {
                                    start: index === 0,
                                    end: index === jobs.length - 1
                                }
                                return <ExpCard {...item} key={index} {...position} />
                            })}
                        </div>
                    </Section>
                    <Section id="skills" title="Skills">
                        <div className="skills-view">
                            <div className="regular-text">
                                <p>
                                    My areas of expertise include frameworks, languages and operating systems surrounding the development of cloud based,
                                    distributed web applications powered by MERN stack and AWS.
                                </p>
                                <p>
                                    They include (in no particular order) JavaScript, Python, Java, React.js, SCSS, LESS, CSS, HTML, Redux, Node.js, MongoDB,
                                    mongoose.js, Redis, GraphQL, Apollo, Docker, Kubernetes, AWS, Linux OS management, BASH and others.
                                </p>
                            </div>
                            <div className="grid">
                                {skills.map((item, index) => (
                                    <SkillCard {...item} />
                                ))}
                            </div>
                            <div className="regular-text">
                                <p>
                                    At my job I also actively work with a wide range of AWS services to design new or support the existing cloud solutions.
                                    Ones that I am most proficient at include: AWS Lambda, Step Functions,
                                    ApiGateway, VPC, IAM, Cognito, EC2, DynamoDB, Route53, CloudFront, Elastic Load Balancers, SES, S3, SQS and SNS.
                                </p>
                                <p>
                                    Following below is the full list of AWS services I've been intensively working with and have developed a quite deep understanding of.
                                    Services are sorted by my proficiency level in them (in descending order).
                                </p>
                            </div>
                            <div className="grid">
                                {awsSkills.map((item, index) => (
                                    <SkillCard {...item} />
                                ))}
                            </div>
                        </div>
                    </Section>
                    <Section id="personal-projects" title="Projects">
                        <div className="regular-text">
                            <p>
                                Below are the solo projects of mine that I consider most relevant in the context of frontend and backend engineering,
                                development of cloud solutions and working with MERN development stack.
                            </p>
                            <p>
                                There are however many other projects that I've worked on throughout the years.
                                Majority of them is hosted on my GitHub profile, so if you're interested, click on the "See Other Projects" button below!
                            </p>
                        </div>
                        <div className="card-view">
                            {projects.map((item, index) => (
                                <Card {...item} key={index} />
                            ))}
                        </div>
                    </Section>
                    <Section id="recent-from-blog" title="Publications">
                        <div className="regular-text">
                            <p>
                                Also check out the articles I list below. I write on different topics surrounding software engineering, computers and networking.
                                I publish them on Medium.
                            </p>
                            <p>
                                I post rather rarely, when I have some spare time, so there aren't many articles yet. But more are on the way!
                                I'd also appreciate a follow and a like :-)
                            </p>
                        </div>
                        <div className="publications-view">
                            {publications.map((item, index) => (
                                <PublicationCard {...item} />
                            ))}
                        </div>
                    </Section>
                    <Section id="contact" title="Contact" accent>
                        <div className="contact-view">
                            {links.map((item, index) => {
                                const data = {
                                    href: item.href,
                                    title: item.readableLink,
                                    ico: item.ico
                                }
                                return <Link {...data} key={index} />
                            })}
                        </div>
                    </Section>
                    <div className="footer">
                        <div><IconCopyright /><span>Andrew Titenko 2020</span></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Layout.contextType = ThemeContext;

export default Layout;
