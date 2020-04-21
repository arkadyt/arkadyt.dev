import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/main';
import Blinds from 'components/blinds';
import ThemeContext from 'state/context/theme';
import { getLastUsedTheme, setLastUsedTheme } from 'tools';
import './index.scss';
import clsx from 'clsx';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [theme, setTheme] = useState(getLastUsedTheme() || 'l-theme');

  const toggleTheme = () => {
    const map = { "l-theme": "d-theme", "d-theme": "l-theme" };
    setLastUsedTheme(map[theme]);
    setTheme(map[theme]);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={clsx("App-container", theme)}>
        <Main />
        <Blinds />
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
