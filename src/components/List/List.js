import React from 'react';
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
    state = {
        showCodingProjects: true,
        applyDarkStyle: true
    }

    render() {
        return this.props.projectsList.map((project, index) => {
            return <ListItem key={index} id={index} {...project} />;
        });
    }
}

export default List;