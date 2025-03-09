import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalRule = () => {
  return <View style={styles.horizontalRule} />;
};

const styles = StyleSheet.create({
  horizontalRule: {
    borderBottomColor: '#ddd', // Line color
    borderBottomWidth: 1.3, // Line thickness (thin and crisp)
    // marginTop: 9, // Adjust vertical spacing as needed
  },
});

export default HorizontalRule;