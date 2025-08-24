// Header.jsx
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 cursor-pointer">
        My Website
      </h1>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
      >
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
