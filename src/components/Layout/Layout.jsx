import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
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

        return <React.Fragment>
            <div className="Layout-content-background" />
            <NavBar links={testLinks} />
            <div className="Layout-content">
                <Section title="Personal Projects"></Section>
                <Section title="Work Experience"></Section>
                <Section title="Contact"></Section>
            </div>
        </React.Fragment>
    }
}
