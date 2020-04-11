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
    publications,
    projects, 
    jobs, 
    skills,
    links,
    about,
    intro
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
                            {skills.map((item, index) => (
                                <SkillCard {...item} />
                            ))}
                        </div>
                    </Section>
                    <Section id="personal-projects" title="Projects">
                        <div className="card-view">
                            {projects.map((item, index) => (
                                <Card {...item} key={index} />
                            ))}
                        </div>
                    </Section>
                    <Section id="recent-from-blog" title="Publications">
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
