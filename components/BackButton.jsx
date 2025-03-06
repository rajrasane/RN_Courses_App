import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import useRouter

const BackButton = ({ color = '#000' }) => {
  const router = useRouter(); // Initialize useRouter

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => router.back()} // Use router.back()
    >
      <Ionicons name="arrow-back" size={26} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 20,
        left: 15,
        zIndex: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 0.2,
        
      }
});

export default BackButton;