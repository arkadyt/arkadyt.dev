import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/main';
import ThemeContext from 'state/context/theme';
import './index.scss';
import clsx from 'clsx';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [theme, setTheme] = useState('l-theme');

  const toggleTheme = () => {
    const map = { "l-theme": "d-theme", "d-theme": "l-theme" };
    setTheme(map[theme]);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={clsx("App-container", theme)}>
        <Main />
        <div className="blinds" />
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
