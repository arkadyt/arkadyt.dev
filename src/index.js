import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer.js';

const store = createStore(reducer);

const root = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App/></Provider>, root);