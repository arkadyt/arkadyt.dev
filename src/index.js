import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/main';
import ThemeContext from 'state/context/theme';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App-container">
        <Main />
        <div className="blinds" />
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
