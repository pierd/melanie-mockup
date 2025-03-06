import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define theme types
export type ThemeType = 'default' | 'alternative';

// Define the context type
type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'default',
  toggleTheme: () => {}, // Empty function as placeholder
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme Provider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Define color palettes from design rules
const DEFAULT_COLORS = {
  // Sage Green Palette (Yoga Services)
  yogaPrimary: '#6B7355',
  yogaLight: '#9CA383',
  yogaDeep: '#3C4228',

  // Terracotta Palette (Massage Services)
  massagePrimary: '#A0522D',
  massageLight: '#C08267',
  massageDeep: '#5D3A1A',

  // Golden Ochre Palette (Midwifery Services)
  midwiferyPrimary: '#CC7722',
  midwiferyLight: '#E3A23D',
  midwiferyDeep: '#8B4513',

  // Beige/Neutral Palette (Shared Elements)
  beigePrimary: '#C4B49F',
  beigeLight: '#E6D7C3',
  beigeDeep: '#8B7D6B',

  // Black Palette (Text & Accents)
  textPrimary: '#000000',
  textSecondary: '#2C2C2C',
  textTertiary: '#121212'
};

const ALTERNATIVE_COLORS = {
  // Alternative Yoga Service Colors
  yogaPrimary: '#8FBC8F',
  yogaLight: '#C5E1A5',
  yogaDeep: '#567E5A',

  // Alternative Massage Service Colors
  massagePrimary: '#FF7F50',
  massageLight: '#FFB088',
  massageDeep: '#CD5C5C',

  // Alternative Midwifery Service Colors
  midwiferyPrimary: '#B57EDC',
  midwiferyLight: '#E6E6FA',
  midwiferyDeep: '#8A4FFF',

  // Alternative Beige/Neutral (Unifying Primary Colors)
  beigePrimary: '#1A9186', // Deep Teal
  beigeLight: '#D4B483',   // Warm Sand
  beigeDeep: '#34495E',    // Soft Navy Blue

  // Alternative Black Palette (Background & Neutral Colors)
  textPrimary: '#F5F5F5',  // Soft Gray
  textSecondary: '#FAFAFA', // Off-White
  textTertiary: '#E9E9E9'  // Light Gray
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Initialize theme from localStorage if available, otherwise use default
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeType) || 'default';
  });

  // Toggle between themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'default' ? 'alternative' : 'default');
  };

  // Apply CSS variables based on the current theme
  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);

    // Get the root element to update CSS variables
    const root = document.documentElement;

    // Select the appropriate color palette based on the theme
    const colors = theme === 'default' ? DEFAULT_COLORS : ALTERNATIVE_COLORS;

    // Apply all 15 colors from the design rules

    // Yoga colors (3)
    root.style.setProperty('--yoga-primary', colors.yogaPrimary);
    root.style.setProperty('--yoga-light', colors.yogaLight);
    root.style.setProperty('--yoga-deep', colors.yogaDeep);

    // Massage colors (3)
    root.style.setProperty('--massage-primary', colors.massagePrimary);
    root.style.setProperty('--massage-light', colors.massageLight);
    root.style.setProperty('--massage-deep', colors.massageDeep);

    // Midwifery colors (3)
    root.style.setProperty('--midwifery-primary', colors.midwiferyPrimary);
    root.style.setProperty('--midwifery-light', colors.midwiferyLight);
    root.style.setProperty('--midwifery-deep', colors.midwiferyDeep);

    // Beige/Neutral colors (3)
    root.style.setProperty('--beige-primary', colors.beigePrimary);
    root.style.setProperty('--beige-light', colors.beigeLight);
    root.style.setProperty('--beige-deep', colors.beigeDeep);

    // Text colors (3)
    root.style.setProperty('--text-primary', colors.textPrimary);
    root.style.setProperty('--text-secondary', colors.textSecondary);
    root.style.setProperty('--text-tertiary', colors.textTertiary);

  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
