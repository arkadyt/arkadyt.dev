import React from 'react';
import classes from './RootPage.module.css';

import QuadsMenu from '../../QuadsMenu/QuadsMenu';
import IconProjects from 'react-icons/lib/fa/code';
import IconContact from 'react-icons/lib/md/mail';
import IconEducation from 'react-icons/lib/fa/graduation-cap';
import IconExperience from 'react-icons/lib/fa/briefcase';

const rootPage = () => {
    let items = [
        { route: 'education', title: 'Education', icon: <IconEducation /> },
        { route: 'experience', title: 'Experience', icon: <IconExperience /> },
        { route: 'projects', title: 'Projects', icon: <IconProjects /> },
        { route: 'contact', title: 'Contact', icon: <IconContact /> },
    ];

    let options = {
        background: 'https://i.imgur.com/TLydeaj.png'
    }

    return <div className={classes.container}>
        <QuadsMenu items={items} {...options} />
    </div>;
};

export default rootPage;