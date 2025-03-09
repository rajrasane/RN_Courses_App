import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import HorizontalRule from './HorizontalRule';

export default function ExperienceSection() {
  return (
    <>
    <HorizontalRule />
    <ImageBackground source={require('../assets/images/experience_illustration.jpg')} style={styles.experienceSection}>
      <View style={styles.experienceContent}>
        <Text style={styles.experienceTitle}>Share Your Learning Experience</Text>
        {/* <Text style={styles.experienceSubtitle}></Text> */}
        <TouchableOpacity style={styles.writeNowButton}>
          <Text style={styles.writeNowButtonText}>Write a Review</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <HorizontalRule />
    </>
  );
}

const styles = StyleSheet.create({
  experienceSection: {
    padding: 20,
    marginBottom : 20,
    borderBottomColor : '#ddd',
    borderBottomWidth : 1.3,
  },
  experienceContent: { flex: 1 },
  experienceTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#333',
    marginBottom: 50,
  },
  writeNowButton: {
    backgroundColor: '#fff',  // White background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,  // Rounded corners
    alignSelf: 'flex-start',
    borderColor: '#ddd',  // Light gray border
    borderWidth: 1,
    shadowColor: '#000',  // Subtle shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,  // For Android shadow
    marginTop  : 10,
  },
  writeNowButtonText: {
    color: '#666',  // Gray text
    fontWeight: '400',  // Normal weight
    fontSize: 16,
  },  
});
