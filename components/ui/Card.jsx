import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, RADIUS, SHADOWS, SPACING } from '../../styles/designSystem';

const Card = ({
  children,
  onPress,
  elevation = 'small', // small, medium, large
  padding = 'medium',  // none, small, medium, large
  radius = 'medium',   // small, medium, large
  style = {},
}) => {
  const getElevationStyle = () => {
    switch (elevation) {
      case 'small': return SHADOWS.small;
      case 'medium': return SHADOWS.medium;
      case 'large': return SHADOWS.large;
      default: return SHADOWS.small;
    }
  };

  const getPaddingStyle = () => {
    switch (padding) {
      case 'none': return { padding: 0 };
      case 'small': return { padding: SPACING.sm };
      case 'medium': return { padding: SPACING.md };
      case 'large': return { padding: SPACING.lg };
      default: return { padding: SPACING.md };
    }
  };

  const getRadiusStyle = () => {
    switch (radius) {
      case 'small': return { borderRadius: RADIUS.sm };
      case 'medium': return { borderRadius: RADIUS.md };
      case 'large': return { borderRadius: RADIUS.lg };
      default: return { borderRadius: RADIUS.md };
    }
  };

  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent
      style={[
        styles.card,
        getElevationStyle(),
        getPaddingStyle(),
        getRadiusStyle(),
        style,
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      {children}
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.background,
    overflow: 'hidden',
  },
});

export default Card; 