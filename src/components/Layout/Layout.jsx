import React, { Component } from 'react';
import './Layout.css';

import NavBar from '../NavBar/NavBar.jsx';
import Section from '../Section/Section.jsx';
import Card from '../Card/Card.jsx';
import ExpCard from '../ExpCard/ExpCard.jsx';
import Front from '../Front/Front.jsx';
import Link from '../Link/Link.jsx';
import SkillCard from '../SkillCard/SkillCard.jsx';

import { 
  FaRegCopyright as IconCopyright 
} from 'react-icons/fa';

import { 
  projects, 
  jobs, 
  skills,
  links,
  about 
} from '../../content';

export default class Layout extends Component {
    render() {
        return <React.Fragment>
            <div className="Layout-background" />
            <NavBar links={links} />
            <div className="Layout-content">
                <Front />
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
                <Section id="contact" title="Contact" blue>
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
    }
}
