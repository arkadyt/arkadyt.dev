import React from 'react';

import weworkWEBP from 'images/projects/wework.webp';
import weworkJPG from 'images/projects/wework.jpg';

import vspaceWEBP from 'images/projects/vspace.webp';
import vspaceJPG from 'images/projects/vspace.jpg';

import arkadytWEBP from 'images/projects/arkadyt.webp';
import arkadytJPG from 'images/projects/arkadyt.jpg';

export default [
    {
        href: 'https://github.com/arkadyt/wework',
        image: {
            webp: weworkWEBP,
            fallback: weworkJPG,
        },
        title: 'WeWork',
        description: <span>
            Fully-fledged social networking platform built with JS, React, Redux, Node.js, Express and others.<br />
            Not a full Twitter copy, but a close one!
        </span>,
        tags: ['JS', 'React.js', 'Redux', 'Node.js', 'Express', 'MongoDB', 'AWS'],
        links: [
            { title: 'Website', href: 'https://wework.arkadyt.dev' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/wework' },
        ],
    },
    {
        href: 'https://github.com/arkadyt/vspace',
        image: {
            webp: vspaceWEBP,
            fallback: vspaceJPG,
        },
        title: 'vSpace',
        description: <span>
            An eCommerce platform built on MERN stack. Application is hosted on AWS. No free shipping! :)
        </span>,
        tags: ['JS', 'React', 'Redux.js', 'Node', 'Express.js', 'MongoDB', 'AWS'],
        links: [
            { title: 'Website', href: 'https://vspace.arkadyt.dev' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/vspace' },
        ],
    },
    {
        href: 'https://github.com/arkadyt/arkadyt.dev',
        image: {
            webp: arkadytWEBP,
            fallback: arkadytJPG,
        },
        title: 'arkadyt.dev',
        description: 'My personal portfolio website arkadyt.dev. And actually you\'re looking at it right now! Check out the source code at GitHub!',
        tags: ['JavaScript', 'HTML', 'CSS', 'React', 'AWS', 'S3', 'CloudFront', 'Lambda@Edge'],
        links: [
            { title: 'Website', href: 'https://arkadyt.dev' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/arkadyt.dev' },
        ],
    },
]
