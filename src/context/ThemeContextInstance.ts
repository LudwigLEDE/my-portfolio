import { createContext } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
