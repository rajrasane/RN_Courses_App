import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { COLORS, RADIUS } from '../../styles/designSystem';

const Skeleton = ({
  width,
  height,
  radius = 'sm',
  style = {},
}) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [opacity]);

  const getRadiusStyle = () => {
    switch (radius) {
      case 'none': return { borderRadius: 0 };
      case 'sm': return { borderRadius: RADIUS.sm };
      case 'md': return { borderRadius: RADIUS.md };
      case 'lg': return { borderRadius: RADIUS.lg };
      case 'round': return { borderRadius: RADIUS.round };
      default: return { borderRadius: RADIUS.sm };
    }
  };

  return (
    <Animated.View
      style={[
        styles.skeleton,
        getRadiusStyle(),
        { width, height, opacity },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: COLORS.border,
  },
});

export default Skeleton; 