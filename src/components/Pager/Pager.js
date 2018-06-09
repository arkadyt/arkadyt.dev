import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Projects from './Pages/Projects/Projects'; // /projects route component.
import EmailMe from './Pages/EmailMe/EmailMe'; // /emailme route component.
import NavBar from './NavBar/NavBar';

import classes from './Pager.module.css';

/**
 * Holds root level router and global NavBar.
 */
const pager = () => {
    /* 'route' : 'nav-button-name' */
    const routes = {
        '/projects': 'Projects',
        '/emailme': 'Email Me',
    }

    /** 
     * (Subject to change!)
     * It would surely make sense to fetch data at <Projects/>
     * itself (since this data is used only there)
     * but then, if I change pages order later at NavBar,
     * <Projects/> will now (likely) not be default view and
     * fetching process will start upon the click on Projects 
     * tab.
     * This will introduce display delays as opposed
     * to loading it here, prior to <Projects/> render.
     */
    const data = [ // instead of fetch for now.
        {
            header: 'Area 55',
            url: 'http://a.com',
            img: 'https://picsum.photos/200/300/?random',
            body: 'Et dolore qui eiusmod ullamco ipsum nisi culpa in irure fugiat. Sint eiusmod reprehenderit anim cupidatat cupidatat aliquip esse. Cillum magna occaecat sunt cupidatat nisi magna nisi. Incididunt magna esse cupidatat reprehenderit irure et consectetur cillum. Nisi exercitation consequat quis non aliqua aliqua id excepteur velit qui consectetur cillum adipisicing.'
        },
        {
            header: 'Area 71',
            url: 'http://a.com',
            img: 'https://picsum.photos/200/500/?random',
            body: 'Et dolore qui eiusmod ullamco ipsum nisi culpa in irure fugiat. Sint eiusmod reprehenderit anim cupidatat cupidatat aliquip esse. Cillum magna occaecat sunt cupidatat nisi magna nisi. Incididunt magna esse cupidatat reprehenderit irure et consectetur cillum. Nisi exercitation consequat quis non aliqua aliqua id excepteur velit qui consectetur cillum adipisicing.'
        },
    ];

    return <Router>
        <div className={classes.container}>
            <NavBar routes={routes} />
            <Switch>
                <Route path='/projects'
                    render={(props) => <Projects data={data} {...props} />} />
                <Route path='/emailme' component={EmailMe} />
                <Redirect to='/projects' />
            </Switch>
        </div>
    </Router>;
};

export default pager;