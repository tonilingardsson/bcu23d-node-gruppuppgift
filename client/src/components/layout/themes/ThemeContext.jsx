// ThemeContext.jsx

import React, { createContext, useState, useEffect } from 'react';

// Create a context to store the theme and the toggleTheme function
export const ThemeContext = createContext();

// Create a ThemeProvider component that will store the theme and the toggleTheme function
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Set the default theme to light

  // Check the user's default computer preference for dark mode
  useEffect(() => {
    const  userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; 
    setTheme(userPreference);
  }, []);

  // Function to toggle the theme manually
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Set the theme in the DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Return the ThemeContext.Provider with the theme and the toggleTheme function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      </ThemeContext.Provider>
  );
};