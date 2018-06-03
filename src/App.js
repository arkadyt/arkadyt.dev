import React from 'react';

// import Flap from './components/Flap/Flap';
import Aux from './components/Aux/Aux';
import Pager from './components/Pager/Pager';

class App extends React.Component {
    render() {
        return <Aux>
            {/* <Flap /> */}
            <Pager />
        </Aux>;
    }
}

export default App;