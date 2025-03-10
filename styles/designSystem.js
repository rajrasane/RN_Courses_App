// Design system constants for your app
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Color palette
export const COLORS = {
  primary: '#3D5CFF',
  primaryLight: '#5A75FF',
  primaryDark: '#2A41B8',
  secondary: '#F4B400',
  success: '#34A853',
  error: '#EA4335',
  warning: '#FBBC05',
  background: '#FFFFFF',
  card: '#F8F9FA',
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#BDBDBD',
    light: '#FFFFFF',
  },
  border: '#E0E0E0',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

// Typography
export const FONTS = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
  },
  weights: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  family: {
    // Default to system fonts, you can substitute with custom fonts
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
};

// Spacing
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Border radius
export const RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999,
};

// Shadows
export const SHADOWS = {
  small: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};

// Screen dimensions
export const SIZES = {
  width,
  height,
};

// Layout constants
export const LAYOUT = {
  screenPadding: SPACING.md,
  headerHeight: 60,
  footerHeight: 60,
}; 