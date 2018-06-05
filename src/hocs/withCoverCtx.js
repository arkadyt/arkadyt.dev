import React from 'react';

export const CoverCtx = React.createContext();

/**
 * Implements logic of <Cover /> (wheel event listener), holds it's state.
 * Provides context containing the state and handle to change it.
 * 
 * Supposed to wrap App component to allow for consuming at <Cover /> 
 * and for a button at Pager/NavBar.js.
 */
export default (WrappedComponent) => {
    return class extends React.PureComponent {
        state = {
            coverLifted: false
        }

        render() {
            return <CoverCtx.Provider value={{
                coverLifted: this.state.coverLifted,
                setCoverLifted: bool => this.setState({ coverLifted: bool })
            }}>
                <WrappedComponent />
            </CoverCtx.Provider>;
        }

        componentDidMount() {
            window.addEventListener('wheel', e => {
                this.setState({
                    coverLifted: e.deltaY > 0
                });
            });
        }
    }
}