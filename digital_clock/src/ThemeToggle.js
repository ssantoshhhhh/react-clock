import React from 'react';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
