import React from 'react';
import { connect } from 'react-redux';

import Cover from './components/Cover/Cover';
import Pager from './components/Pager/Pager';
import Blinds from './components/Blinds/Blinds';
import withCoverCtx from './hocs/withCoverCtx';

class App extends React.PureComponent {
    render() {
        return <React.Fragment>
            <Cover />
            <Pager />
            {(this.props.coverLoaded && this.props.pagerLoaded) ? null : <Blinds/>}
        </React.Fragment>;
    }
}

const mapStateToProps = state => {
    return {
        coverLoaded: state.coverLoaded,
        pagerLoaded: state.pagerLoaded
    }
}

export default withCoverCtx(connect(mapStateToProps)(App));
