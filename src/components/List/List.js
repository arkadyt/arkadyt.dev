import React from 'react';
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
    state = {
        showCodingProjects: true,
        applyDarkStyle: true
    }

    render() {
        return (
            <div>
                {this.props.projectsList.map(project => {
                    return (
                        <div>
                            <ListItem {...project} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default List;