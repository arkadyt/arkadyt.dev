import React, { Component, useContext } from 'react';
import ThemeContext from 'state/context/theme';
import Image from 'components/utils/image';
import clsx from 'clsx';
import './styles.scss';

import NavBar from 'components/navbar';
import Section from 'components/blocks/section';
import Card from 'components/cards/project';
import PublicationCard from 'components/cards/publication';
import ExpCard from 'components/cards/job';
import Front from 'components/blocks/intro';
import Link from 'components/utils/link';
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
                    <Section id="certs" title="Certifications">
                    </Section>
                    <Section id="skills" title="Skills">
                        <div className="skills-view">
                            <div className="grid">
                                {skills.map((item, index) => (
                                    <SkillCard {...item} />
                                ))}
                            </div>
                            <div className="regular-text">
                                <p>
                                    At my job I am also actively working with a wide range of AWS services when implementing new cloud solutions
                                    or supporting the existing ones.
                                </p>
                                <p>
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
                                Following are the solo projects of mine that I consider most relevant in the context of frontend and backend engineering,
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
                            </p>
                            <p>
                                I post rather rarely, when I have some spare time, so there aren't many articles yet, but more are on the way!
                                Would also appreciate a follow and a like! :-)
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
                        <div><IconCopyright /><span>Arkady Titenko 2020</span></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Layout.contextType = ThemeContext;

export default Layout;
