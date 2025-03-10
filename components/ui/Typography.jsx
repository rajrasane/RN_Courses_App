import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../styles/designSystem';

const Typography = ({
  children,
  variant = 'body1',  // h1, h2, h3, h4, subtitle1, subtitle2, body1, body2, caption, button
  color = 'primary',  // primary, secondary, disabled, light
  align = 'left',     // left, center, right
  weight,             // If specified, overrides the default weight for the variant
  style = {},
  numberOfLines,
  ...props
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'h1':
        return {
          fontSize: FONTS.sizes.xxl,
          fontWeight: FONTS.weights.bold,
          lineHeight: FONTS.sizes.xxl * 1.2,
        };
      case 'h2':
        return {
          fontSize: FONTS.sizes.xl,
          fontWeight: FONTS.weights.bold,
          lineHeight: FONTS.sizes.xl * 1.2,
        };
      case 'h3':
        return {
          fontSize: FONTS.sizes.lg,
          fontWeight: FONTS.weights.semiBold,
          lineHeight: FONTS.sizes.lg * 1.2,
        };
      case 'h4':
        return {
          fontSize: FONTS.sizes.md,
          fontWeight: FONTS.weights.semiBold,
          lineHeight: FONTS.sizes.md * 1.2,
        };
      case 'subtitle1':
        return {
          fontSize: FONTS.sizes.md,
          fontWeight: FONTS.weights.medium,
          lineHeight: FONTS.sizes.md * 1.2,
        };
      case 'subtitle2':
        return {
          fontSize: FONTS.sizes.sm,
          fontWeight: FONTS.weights.medium,
          lineHeight: FONTS.sizes.sm * 1.2,
        };
      case 'body1':
        return {
          fontSize: FONTS.sizes.md,
          fontWeight: FONTS.weights.regular,
          lineHeight: FONTS.sizes.md * 1.5,
        };
      case 'body2':
        return {
          fontSize: FONTS.sizes.sm,
          fontWeight: FONTS.weights.regular,
          lineHeight: FONTS.sizes.sm * 1.5,
        };
      case 'caption':
        return {
          fontSize: FONTS.sizes.xs,
          fontWeight: FONTS.weights.regular,
          lineHeight: FONTS.sizes.xs * 1.5,
        };
      case 'button':
        return {
          fontSize: FONTS.sizes.md,
          fontWeight: FONTS.weights.medium,
          lineHeight: FONTS.sizes.md * 1.2,
          textTransform: 'uppercase',
        };
      default:
        return {
          fontSize: FONTS.sizes.md,
          fontWeight: FONTS.weights.regular,
          lineHeight: FONTS.sizes.md * 1.5,
        };
    }
  };

  const getColorStyle = () => {
    switch (color) {
      case 'primary': return { color: COLORS.text.primary };
      case 'secondary': return { color: COLORS.text.secondary };
      case 'disabled': return { color: COLORS.text.disabled };
      case 'light': return { color: COLORS.text.light };
      default: return { color: COLORS.text.primary };
    }
  };

  return (
    <Text
      style={[
        getVariantStyle(),
        getColorStyle(),
        { textAlign: align },
        weight && { fontWeight: weight },
        style,
      ]}
      numberOfLines={numberOfLines}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography; 