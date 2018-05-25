import React from 'react';
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
    render() {
        /* Div wrapper is required at NavBar.js 
        /* to be able to read !whole! List dimensions. */
        return <div>
            {this.props.projectsList.map((project, index) => {
                return <ListItem key={index} id={index} {...project} />;
            })}
        </div>;
    }
}

export default List;