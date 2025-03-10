import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SPACING, RADIUS } from '../../styles/designSystem';

const Button = ({
  title,
  onPress,
  variant = 'primary', // primary, secondary, outline, text
  size = 'medium',     // small, medium, large
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon = null,
  rightIcon = null,
  style = {},
  textStyle = {},
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: COLORS.primary,
          borderColor: COLORS.primary,
        };
      case 'secondary':
        return {
          backgroundColor: COLORS.secondary,
          borderColor: COLORS.secondary,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderColor: COLORS.primary,
          borderWidth: 1,
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        };
      default:
        return {
          backgroundColor: COLORS.primary,
          borderColor: COLORS.primary,
        };
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          paddingVertical: SPACING.xs,
          paddingHorizontal: SPACING.md,
          borderRadius: RADIUS.sm,
        };
      case 'medium':
        return {
          paddingVertical: SPACING.sm,
          paddingHorizontal: SPACING.lg,
          borderRadius: RADIUS.md,
        };
      case 'large':
        return {
          paddingVertical: SPACING.md,
          paddingHorizontal: SPACING.xl,
          borderRadius: RADIUS.md,
        };
      default:
        return {
          paddingVertical: SPACING.sm,
          paddingHorizontal: SPACING.lg,
          borderRadius: RADIUS.md,
        };
    }
  };

  const getTextStyle = () => {
    if (variant === 'outline' || variant === 'text') {
      return { color: COLORS.primary };
    }
    return { color: COLORS.text.light };
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style,
      ]}
      activeOpacity={0.7}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled: disabled || loading }}
    >
      {leftIcon && !loading && leftIcon}
      
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' || variant === 'text' ? COLORS.primary : COLORS.text.light} 
        />
      ) : (
        <Text style={[
          styles.text, 
          getTextStyle(),
          size === 'small' && { fontSize: FONTS.sizes.sm },
          size === 'large' && { fontSize: FONTS.sizes.lg },
          textStyle
        ]}>
          {title}
        </Text>
      )}
      
      {rightIcon && !loading && rightIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
  },
  text: {
    fontSize: FONTS.sizes.md,
    fontWeight: FONTS.weights.medium,
    textAlign: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.6,
  },
});

export default Button; 