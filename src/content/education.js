import React from 'react';
import ImgAws from 'images/aws.png';
import ImgUni from 'images/lib.svg';
import ImgUni_dark from 'images/lib_dark.svg';

const certLink = (
    <a href="https://bit.ly/3no4Wh5" target="_blank" rel="noopener noreferrer">
        View the Certificate
    </a>
);

export default [
    {
        title: 'AWS Cloud Solutions Architect',
        subtitle: [
            'Associate Level',
            certLink,
        ],
        subtitleMobile: 'Associate Level',
        date: '2020 — Expires 2023',
        image: ImgAws,
        noLongevity: true
    },
    {
        title: 'Turkmen Polytechnic Institute',
        subtitle: [
            'Bachelor of Science',
            'Computer Science'
        ],
        subtitleMobile: 'BSc. Computer Science',
        date: '2014 — 2018',
        image: ImgUni,
        imageDark: ImgUni_dark,
        noLongevity: true
    }
];
