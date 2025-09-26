import { useState, useEffect } from 'react';

const useTheme = () => {
  // 1. Initialize state from local storage or default to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // 2. Function to toggle the state
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // 3. Effect to apply the class to the body and save preference
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Return only the toggle function and the state
  return { isDarkMode, toggleDarkMode };
};

export default useTheme;