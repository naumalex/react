'use client';
import { ReactNode, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const switchTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);
  return (
    <ThemeContext.Provider value={{ isDarkTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
