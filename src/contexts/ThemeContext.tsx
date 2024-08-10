'use client';
import { createContext } from 'react';

export const ThemeContext = createContext<{
  isDarkTheme: boolean;
  switchTheme: () => void;
}>({ isDarkTheme: true, switchTheme: () => {} });
