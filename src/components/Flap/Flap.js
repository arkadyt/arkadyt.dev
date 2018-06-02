import React from 'react';
import classes from './Flap.module.css';

class Flap extends React.PureComponent {
    state = {
        lifted: false
    }

    render() {
        const cls = [classes.container, this.state.lifted ? classes.lifted : ''].join(' ');
        return (
            <div className={cls}>
                <img src='http://placehold.it/1920x1080' alt="" />
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('wheel', (e) => {
            this.setState({
                lifted: e.deltaY > 0? true : false
            });
        });
    }
};

export default Flap;