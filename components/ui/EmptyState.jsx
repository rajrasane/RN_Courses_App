import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Typography from './Typography';
import Button from './Button';
import { SPACING } from '../../styles/designSystem';

const EmptyState = ({
  title = 'No data found',
  message = 'We couldn\'t find any data to display.',
  image,
  buttonText,
  onButtonPress,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {image && (
        <Image 
          source={image} 
          style={styles.image}
          resizeMode="contain"
        />
      )}
      
      <Typography variant="h3" align="center" style={styles.title}>
        {title}
      </Typography>
      
      <Typography variant="body1" color="secondary" align="center" style={styles.message}>
        {message}
      </Typography>
      
      {buttonText && onButtonPress && (
        <Button
          title={buttonText}
          onPress={onButtonPress}
          variant="primary"
          style={styles.button}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: SPACING.lg,
  },
  title: {
    marginBottom: SPACING.sm,
  },
  message: {
    marginBottom: SPACING.lg,
  },
  button: {
    marginTop: SPACING.md,
  },
});

export default EmptyState; 