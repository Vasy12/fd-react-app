import { createContext } from 'react';
import { THEME_VALUES } from '../constants';

export const UserContext = createContext(null);

export const ThemeContext = createContext(THEME_VALUES.LIGHT);
