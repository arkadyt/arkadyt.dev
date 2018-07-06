import React from 'react';

import Cover from './components/Cover/Cover';
import Pager from './components/Pager/Pager';
import Blinds from './components/Blinds/Blinds';
import Shadow from './components/Shadow/Shadow';

class App extends React.PureComponent {
    render() {
        return <React.Fragment>
            <Blinds />
            <Cover />
            <Shadow />
            <Pager />
        </React.Fragment>;
    }
}

export default App;
