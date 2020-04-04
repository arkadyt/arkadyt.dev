import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/main';
import ThemeContext from 'state/context/theme';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log('invoked')
    const map = { light: 'dark', dark: 'light' };
    setTheme(map[theme]);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App-container">
        <Main />
        <div className="blinds" />
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
