import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import Card from '../Card/Card';
import Front from '../Front/Front';
import Link from '../Link/Link';
import './Layout.css';

import IconGitHub from 'react-icons/lib/go/mark-github';
import IconLinkedIn from 'react-icons/lib/fa/linkedin-square';
import IconDOCX from 'react-icons/lib/fa/file-word-o';
import IconCopyright from 'react-icons/lib/fa/copyright';
import IconMail from 'react-icons/lib/go/mail-read';

export default class Layout extends Component {
    render() {
        const testLinks = [
            { ico: <IconMail />, href: 'mailto:sample.email@mail.com', title: 'sample.email@mail.com' },
            { ico: <IconGitHub />, href: 'http://github.com/arkadyt', title: 'github.com/arkadyt' },
            { ico: <IconLinkedIn />, href: 'http://linkedin.com/in/arkadyt', title: 'linkedin.com/in/arkadyt' },
            { ico: <IconDOCX />, href: 'https://a.com/3', title: 'Download Resume' },
        ];

        const testProjects = [
            {
                href: 'https://github.com/arkadyt/phys-bund',
                image: 'https://i.imgur.com/y5Wb6eM.jpg',
                title: 'Demos of Physics Phenomena',
                description: 'A sample project description intended to inform the reader with more details.',
                tags: ['Unity', 'C#', '3DSMax'],
            },
            {
                href: 'https://github.com/arkadyt/phys-bund',
                image: 'https://i.imgur.com/y5Wb6eM.jpg',
                title: 'Demos of Physics Phenomena',
                description: 'A sample project description intended to inform the reader with more details.',
                tags: ['Unity', 'C#', '3DSMax'],
            },
            {
                href: 'https://github.com/arkadyt/phys-bund',
                image: 'https://i.imgur.com/y5Wb6eM.jpg',
                title: 'Demos of Physics Phenomena',
                description: 'A sample project description intended to inform the reader with more details.',
                tags: ['Unity', 'C#', '3DSMax'],
            },
        ];

        return <React.Fragment>
            <div className="Layout-background" />
            <NavBar links={testLinks} />
            <div className="Layout-content">
                <Front />
                <Section title={<div>Personal<br />Projects</div>}>
                    <div className="Layout-card-view">
                        {testProjects.map((item, index) => (
                            <Card {...item} key={index} />
                        ))}
                    </div>
                </Section>
                <Section title="Work Experience">
                    {/* WEXP Cards */}
                </Section>
                <Section title="Contact" blue>
                    <div className="Layout-contact-view">
                        {testLinks.map((item, index) => {
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
