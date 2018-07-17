import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';

export default class Layout extends Component {
    render() {
        const testLinks = [
            { title: 'Nav Link 1', href: 'https://a.com/1' },
            { title: 'Nav Link 2', href: 'https://a.com/2' },
            { title: 'Nav Link 3', href: 'https://a.com/3' }
        ];

        return <div>
            <NavBar links={testLinks}/>
        </div>
    }
}
