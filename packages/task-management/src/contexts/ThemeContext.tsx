import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }

    return 'light';
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);

    // Update CSS custom properties
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--color-background', '#1a1a1a');
      root.style.setProperty('--color-background-secondary', '#2d2d2d');
      root.style.setProperty('--color-text', '#ffffff');
      root.style.setProperty('--color-text-muted', '#b0b0b0');
      root.style.setProperty('--color-border', '#404040');
      root.style.setProperty('--color-primary', '#3b82f6');
      root.style.setProperty('--color-primary-hover', '#2563eb');
      root.style.setProperty('--color-error', '#ef4444');
      root.style.setProperty('--color-error-bg', '#1f1f1f');
      root.style.setProperty('--color-error-hover', '#dc2626');
    } else {
      root.style.setProperty('--color-background', '#ffffff');
      root.style.setProperty('--color-background-secondary', '#f8f9fa');
      root.style.setProperty('--color-text', '#1f2937');
      root.style.setProperty('--color-text-muted', '#6b7280');
      root.style.setProperty('--color-border', '#e5e7eb');
      root.style.setProperty('--color-primary', '#3b82f6');
      root.style.setProperty('--color-primary-hover', '#2563eb');
      root.style.setProperty('--color-error', '#ef4444');
      root.style.setProperty('--color-error-bg', '#fef2f2');
      root.style.setProperty('--color-error-hover', '#dc2626');
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
