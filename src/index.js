import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/main';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const app = () => {
  return (
    <div className="App-container">
      <Main />
      <div className="blinds" />
    </div>
  );
};

ReactDOM.render(app(), document.getElementById('root'));
serviceWorker.unregister();
