import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CrossButton = ({ color = '#000', onPress }) => {
  return (
    <TouchableOpacity style={styles.crossButton} onPress={onPress}>
      <Ionicons name="close" size={26} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  crossButton: {
    position: 'absolute',
    top: 15,
    left: 15, 
    zIndex: 10,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 0.7,
  },
});

export default CrossButton;
