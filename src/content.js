import React from 'react';
import {
  FaFilePdf as IconResume,
  FaLinkedinIn as IconLinkedIn,
  FaMediumM as IconMedium,
  FaPaperPlane as IconMail
} from 'react-icons/fa'
import {
  GoMarkGithub as IconGitHub
} from 'react-icons/go'
import ImgHP from './images/hp.svg';


export const links = [
    { ico: <IconMail />, href: 'mailto:ark@arkadyt.com', title: 'ark@arkadyt.com' },
    { ico: <IconGitHub />, href: 'https://github.com/arkadyt', title: 'github.com/arkadyt' },
    { ico: <IconLinkedIn />, href: 'https://linkedin.com/in/arkadyt', title: 'linkedin.com/in/arkadyt' },
    { ico: <IconMedium />, href: 'https://medium.com/@arkadyt', title: 'medium.com/@arkadyt' },
];

export const jobs = [
    {
        company: 'Full-Stack Software Engineer',
        title: 'Hewlett-Packard Inc',
        date: 'April 2019 - Present (1 year)',
        image: ImgHP,
        imgWidth: 40
    }
]

export const projects = [
    {
        href: 'https://github.com/arkadyt/wework',
        image: 'https://i.imgur.com/nCAXDkVh.png',
        title: 'WeWork',
        description: 'Fully-fledged social networking platform built with JavaScript, React, Redux, Node.js, Express and others. Not a full Twitter copy, but a close one!',
        tags: ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB', 'AWS'],
        links: [
            { title: 'Website', href: 'http://socnet.arkadyt.com' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/ww.net' },
        ],
    },
    {
        href: 'https://github.com/arkadyt/vspace',
        image: 'https://i.imgur.com/nCAXDkVh.png',
        title: 'vSpace',
        description: 'Fully-fledged eCommerce platform. Built with JavaScript, React, Redux, Node.js, Express and others.',
        tags: ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB', 'AWS'],
        links: [
            { title: 'Website', href: 'http://socnet.arkadyt.com' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/ww.net' },
        ],
    },
]

export const about = []
