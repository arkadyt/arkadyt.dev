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
        href: 'mailto:a.titenko@arkadyt.dev',
        readableLink: 'a.titenko@arkadyt.dev',
        title: 'Contact',
    },
    github: {
        ico: <IconGitHub />,
        href: 'https://github.com/arkadyt',
        readableLink: 'github.com/arkadyt',
        title: 'GitHub',
    },
    linkedin: {
        ico: <IconLinkedIn />,
        href: 'https://linkedin.com/in/arkadyt',
        readableLink: 'linkedin.com/in/arkadyt',
        title: 'LinkedIn',
    },
    blog: {
        ico: <IconMedium />,
        href: 'https://medium.com/@arkadyt',
        readableLink: 'medium.com/@arkadyt',
        title: 'Blog',
    },
};
