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
import ImgFreelance from './images/freelance.svg';
import ImgReact from './images/react.svg';

export const skills = [
  {
    icon: ImgReact,
    tooltip: 'Elastic Container\nRegistry'
  },
  {
    icon: ImgReact,
    tooltip: 'LA'
  },
  {
    icon: ImgReact,
    tooltip: 'React.js'
  },
  {
    icon: ImgReact,
    tooltip: 'React.js'
  },
  {
    icon: ImgReact,
    tooltip: 'React.js'
  },
  {
    icon: ImgReact,
    tooltip: 'React.js'
  },
  {
    icon: ImgReact,
    tooltip: 'React.js'
  },
  {
    icon: ImgReact,
    tooltip: 'React.js'
  },
  {
    icon: ImgReact,
    tooltip: 'Node.js'
  }
];

export const links = [
    {
        ico: <IconMail />,
        href: 'mailto:ark@arkadyt.com',
        readableLink: 'ark@arkadyt.com',
        title: 'Contact',
    },
    {
        ico: <IconGitHub />,
        href: 'https://github.com/arkadyt',
        readableLink: 'github.com/arkadyt',
        title: 'GitHub',
    },
    {
        ico: <IconLinkedIn />,
        href: 'https://linkedin.com/in/arkadyt',
        readableLink: 'linkedin.com/in/arkadyt',
        title: 'LinkedIn',
    },
    {
        ico: <IconMedium />,
        href: 'https://medium.com/@arkadyt',
        readableLink: 'medium.com/@arkadyt',
        title: 'Blog',
    },
];

export const jobs = [
    {
        company: 'Full-Stack Software Engineer',
        title: 'Hewlett-Packard Inc',
        date: 'April 2019 — Present (1 year)',
        image: ImgHP,
        imgWidth: 45
    },
    {
        company: 'Freelance Web Developer',
        title: 'Self-Employed',
        date: 'June 2018 — April 2019 (10 months)',
        image: ImgFreelance,
        imgWidth: 45
    },
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
