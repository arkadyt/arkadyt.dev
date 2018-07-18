import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import Card from '../Card/Card';
import Front from '../Front/Front';
import './Layout.css';

import IconGitHub from 'react-icons/lib/go/mark-github';
import IconLinkedIn from 'react-icons/lib/io/social-linkedin';
import IconDOCX from 'react-icons/lib/fa/file-word-o';

export default class Layout extends Component {
    render() {
        const testLinks = [
            { title: <IconGitHub />, href: 'https://a.com/1' },
            { title: <IconLinkedIn />, href: 'https://a.com/2' },
            { title: <IconDOCX />, href: 'https://a.com/3' }
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
                <Section title={<div>Personal<br/>Projects</div>}>
                    <div className="Layout-card-view">
                        {testProjects.map((item, index) => (
                            <Card {...item} key={index} />
                        ))}
                    </div>
                </Section>
                <Section title="Work Experience">
                    {/* WEXP Cards */}
                </Section>
                <Section title="Contact">
                    {/* Links, Message form */}
                </Section>
            </div>
        </React.Fragment>
    }
}
