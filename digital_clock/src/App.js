import React, { useState } from 'react';
import DigitalClock from './DigitalClock';
import ThemeToggle from './ThemeToggle';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <DigitalClock />
    </div>
  );
}

export default App;
