import React, { Component } from 'react';
import './Layout.css';

import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import Card from '../Card/Card';
import ExpCard from '../ExpCard/ExpCard';
import Front from '../Front/Front';
import Link from '../Link/Link';

import IconCopyright from 'react-icons/lib/fa/copyright';
import { projects, jobs, links, about } from '../../content.js';

export default class Layout extends Component {
    render() {
        return <React.Fragment>
            <div className="Layout-background" />
            <NavBar links={links} />
            <div className="Layout-content">
                <Front />
                <Section title="About Me">
                    <div className="Layout-about-view">
                        {about.map((item, index) => {
                            return <div className="Layout-about-item">
                                <span>{item.title}</span><br />
                                <span>{item.description}</span>
                            </div>;
                        })}
                    </div>
                </Section>
                <Section title={<div>Personal<br />Projects</div>}>
                    <div className="Layout-card-view">
                        {projects.map((item, index) => (
                            <Card {...item} key={index} />
                        ))}
                    </div>
                </Section>
                <Section title={<div>Work<br />Experience</div>}>
                    {jobs.map((item, index) => {
                        const position = {
                            start: index === 0,
                            end: index === jobs.length - 1
                        }
                        return <ExpCard {...item} key={index} {...position} />
                    })}
                </Section>
                <Section title="Contact" blue>
                    <div className="Layout-contact-view">
                        {links.map((item, index) => {
                            return <Link {...item} key={index} />
                        })}
                    </div>
                </Section>
                <div className="Layout-footer">
                    <div><IconCopyright /><span>Arkady Titenko 2018</span></div>
                </div>
            </div>
        </React.Fragment>
    }
}
