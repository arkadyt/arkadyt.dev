import React from 'react';
import weworkWEBP from 'images/projects/wework.webp';
import weworkJPG from 'images/projects/wework.jpg';
import vspaceWEBP from 'images/projects/vspace.webp';
import vspaceJPG from 'images/projects/vspace.jpg';

export default [
    {
        href: 'https://github.com/arkadyt/wework',
        image: {
            src: weworkWEBP,
            fallback: weworkJPG,
        },
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
        image: {
            webp: vspaceWEBP,
            fallback: vspaceJPG,
        },
        title: 'vSpace',
        description: 'Fully-fledged eCommerce platform. Built with JavaScript, React, Redux, Node.js, Express and others.',
        tags: ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB', 'AWS'],
        links: [
            { title: 'Website', href: 'http://socnet.arkadyt.com' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/ww.net' },
        ],
    },
]
