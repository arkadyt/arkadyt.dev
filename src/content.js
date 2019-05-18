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
import ImgDL from './images/dollar.svg';
import CV from './docs/arkadyt.andrew.hendrix.resume.pdf';

export const links = [
    { ico: <IconMail />, href: 'mailto:andrew@arkadyt.com', title: 'andrew@arkadyt.com' },
    { ico: <IconGitHub />, href: 'https://github.com/arkadyt', title: 'github.com/arkadyt' },
    { ico: <IconLinkedIn />, href: 'https://linkedin.com/in/arkadyt', title: 'linkedin.com/in/arkadyt' },
    { ico: <IconMedium />, href: 'https://medium.com/@arkadyt', title: 'medium.com/@arkadyt' },
    //{ ico: <IconResume />, href: CV, title: 'Download Resume' },
];

export const jobs = [
    {
        company: 'Full-Stack Web Developer',
        title: 'Self-employed',
        date: 'January 2018 - Present',
        image: ImgDL,
        imgWidth: 18
    }
]

export const projects = [
    {
        href: 'https://github.com/arkadyt/ww.net',
        image: 'https://i.imgur.com/nCAXDkVh.png',
        title: 'WW.NET',
        description: 'Fully-fledged social networking platform built with JavaScript, React, Redux, Node.js, Express and others. Not a full Twitter copy, but a very close one!',
        tags: ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'MongoDB', 'GCP'],
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

export const about = [
    { title: null, description: <p>
        Hello there! My name is Andrew!<br /><br />

        I am a deeply passionate full-stack web developer with years of development experience specializing in modern JavaScript frameworks and development methodologies.<br /><br />

        I strive to provide the best quality services to my clients by carefully designing reliable, secure and professional looking products using the best of the principles and technologies of the modern software development world.<br /><br />

        I develop full stack web applications in JavaScript, React and NodeJS.<br /><br />
        
        When I am not at my desk you can find me in gym where I actively pursue my dream of building a perfect athlete's body! I also enjoy doing level design and photography!<br /><br />

        Challenging tasks and opportunities for growth are the things I appreciate the most. Programming is my passion and I am looking forward to apply my skills for the purpose of growing the success of your team!
        </p>
    }
]
