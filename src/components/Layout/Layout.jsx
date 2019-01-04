import React, { Component } from 'react';
import './Layout.css';

import NavBar from '../NavBar/NavBar.jsx';
import Section from '../Section/Section.jsx';
import Card from '../Card/Card.jsx';
import ExpCard from '../ExpCard/ExpCard.jsx';
import Front from '../Front/Front.jsx';
import Link from '../Link/Link.jsx';

import { 
  FaRegCopyright as IconCopyright 
} from 'react-icons/fa';

import { 
  projects, 
  jobs, 
  links, 
  about 
} from '../../content.js';

export default class Layout extends Component {
    render() {
        return <React.Fragment>
            <div className="Layout-background" />
            <NavBar links={links} />
            <div className="Layout-content">
                <Front />
                <Section id="about-me" title="About Me">
                    <div className="about-view">
                        {about.map((item, index) => {
                            return <div className="item" key={index}>
                                {item.title && <span className="header">{item.title}</span>}
                                <span>{item.description}</span>
                            </div>;
                        })}
                    </div>
                </Section>
                <Section id="personal-projects" title={<div>Personal<br />Projects</div>}>
                    <div className="card-view">
                        {projects.map((item, index) => (
                            <Card {...item} key={index} />
                        ))}
                    </div>
                </Section>
                <Section id="work-experience" title={<div>Work<br />Experience</div>}>
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
                <Section id="contact" title="Contact" blue>
                    <div className="contact-view">
                        {links.map((item, index) => {
                            return <Link {...item} key={index} />
                        })}
                    </div>
                </Section>
                <div className="footer">
                    <div><IconCopyright /><span>Andrew Hendrix 2019</span></div>
                </div>
            </div>
        </React.Fragment>
    }
}
