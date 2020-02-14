import React from 'react';
import {
  FaFilePdf as IconResume,
  FaLinkedinIn as IconLinkedIn,
  FaMediumM as IconMedium,
  FaPaperPlane as IconMail
} from 'react-icons/fa';
import {
  GoMarkGithub as IconGitHub
} from 'react-icons/go'

export default [
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
