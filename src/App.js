import React from 'react';
import Flap from './components/Flap/Flap';
import Aux from './components/Aux/Aux';

class App extends React.Component {
    render() {
        return <Aux>
            <Flap />
        </Aux>;
    }
}

export default App;