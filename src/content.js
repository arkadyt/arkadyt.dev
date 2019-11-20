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
        company: 'Full-Stack React Developer',
        title: 'HP Inc.',
        date: 'April 2019 - Present (8 mos)',
        image: ImgHP,
        imgWidth: 18
    }
]

export const projects = [
    {
        href: 'https://github.com/arkadyt/ww.net',
        image: 'https://i.imgur.com/nCAXDkVh.png',
        title: 'WW.NET',
        description: 'Fully-fledged social networking platform built with JavaScript, React, Redux, Node.js, Express and others. Not a full Twitter copy, but a very close one!',
        tags: ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB', 'AWS'],
        links: [
            { title: 'Website', href: 'http://socnet.arkadyt.com' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/ww.net' },
        ],
    },
    {
        href: 'https://github.com/arkadyt/phys-bund',
        image: 'https://i.imgur.com/y5Wb6eMh.jpg',
        title: 'Demonstrations of Physics Phenomena',
        description: 'Educational desktop application intended to support high school physics curriculum with engaging 3D visuals and interactive virtual equipment.',
        tags: ['C#', '3DSMax', 'Unity3D'],
        links: [
            { title: 'Video', href: 'https://youtu.be/0eX7hdSTzko' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/phys-bund' },
        ],
    },
    {
        href: 'https://github.com/arkadyt/zzlobot',
        image: 'https://i.imgur.com/v0x4PYnh.jpg',
        title: 'zZloBot',
        description: 'Mobile game bot that allows players to automate over 200 different quests and tasks. Built for Android with Java and HMSL.',
        tags: ['Java', 'Android', 'HMSL'],
        links: [
            { title: 'Video', href: 'https://youtu.be/oR2P2E2VgeE' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/zzlobot' },
        ],
    },
    {
        href: 'https://github.com/arkadyt/up.game',
        image: 'https://i.imgur.com/mCFO8rMh.jpg',
        title: 'UP!',
        description: 'Multiplatform mobile game made with Unity3D, Photoshop and C#. It\'s quite challenging actually! =)',
        tags: ['C#', 'Photoshop', 'Unity3D'],
        links: [
            { title: 'Video', href: 'https://youtu.be/9axXzYZFRkQ' },
            { title: 'GitHub', href: 'https://github.com/arkadyt/up.game' },
        ],
    },
]

export const about = []
