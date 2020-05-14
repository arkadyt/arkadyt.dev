import React from 'react';
import {
  FaLinkedin as IconLinkedIn,
  FaMediumM as IconMedium,
  FaPaperPlane as IconMail,
} from 'react-icons/fa';
import {
  GoMarkGithub as IconGitHub
} from 'react-icons/go';

export default {
    email: {
        ico: <IconMail />,
        href: 'mailto:administrator@arkadyt.dev',
        readableLink: 'administrator@arkadyt.dev',
        title: 'Contact',
    },
    github: {
        ico: <IconGitHub />,
        href: 'https://github.com/iamarkadyt',
        readableLink: 'github.com/iamarkadyt',
        title: 'GitHub',
    },
    linkedin: {
        ico: <IconLinkedIn />,
        href: 'https://linkedin.com/in/iamarkadyt',
        readableLink: 'linkedin.com/in/iamarkadyt',
        title: 'LinkedIn',
    },
    blog: {
        ico: <IconMedium />,
        href: 'https://medium.com/@iamarkadyt',
        readableLink: 'medium.com/@iamarkadyt',
        title: 'Blog',
    },
};
