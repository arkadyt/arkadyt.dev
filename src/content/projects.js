import React from 'react';

import weworkWebp from 'images/projects/wework.webp';
import weworkJPG from 'images/projects/wework.jpg';

import vspaceWebp from 'images/projects/vspace.webp';
import vspaceJPG from 'images/projects/vspace.jpg';

import arkadytWebp from 'images/projects/arkadyt.webp';
import arkadytJPG from 'images/projects/arkadyt.jpg';

export default [
    {
        href: 'https://github.com/arkadyt/wework',
        image: {
            primary: weworkWebp,
            fallback: weworkJPG,
        },
        title: 'WeWork',
        description: <span>
            Fully-fledged social networking platform built with JS, React, Redux, Node.js, Express and other software.
            Not a full Twitter copy, but pretty close!
        </span>,
        tags: ['JS', 'React.js', 'Redux', 'Node.js', 'Express', 'MongoDB', 'AWS', '+20'],
        links: [
            { title: 'Website', href: 'https://wework.arkadyt.dev' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/wework' },
        ],
    },
    {
        href: 'https://github.com/arkadyt/vspace',
        image: {
            primary: vspaceWebp,
            fallback: vspaceJPG,
        },
        title: 'vSpace',
        description: <span>
            An open source e-Commerce platform built on MERN stack.
            This is a work in progress, however don't shy away from checking it out! :)
        </span>,
        tags: ['JS', 'React', 'Redux.js', 'Node', 'Express.js', 'MongoDB', 'AWS', '+17'],
        links: [
            { title: 'Website', href: 'https://vspace.arkadyt.dev' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/vspace' },
        ],
    },
    {
        href: 'https://github.com/arkadyt/arkadyt.dev',
        image: {
            primary: arkadytWebp,
            fallback: arkadytJPG,
        },
        title: 'arkadyt.dev',
        description: <span>
            Personal portfolio website built with CSS, HTML, SASS, JavaScript, React.js and other software.
            Hosted on AWS!
        </span>,
        tags: ['JavaScript', 'HTML', 'CSS', 'React', 'AWS', 'S3', 'CloudFront', 'Lambda@Edge', '+9'],
        links: [
            { title: 'Website', href: 'https://arkadyt.dev' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/arkadyt.dev' },
        ],
    },
]
