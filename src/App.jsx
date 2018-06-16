import React from 'react';

import Cover from './components/Cover/Cover';
import Pager from './components/Pager/Pager';
import withCoverCtx from './hocs/withCoverCtx';

class App extends React.PureComponent {
    render() {
        return <React.Fragment>
            {/* <Cover /> */}
            <Pager />
        </React.Fragment>;
    }
}

export default withCoverCtx(App);

