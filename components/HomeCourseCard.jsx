import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CourseCard({ title, price, tags, image }) {
  return (
    <View style={styles.courseCard}>
      <Image source={image} style={styles.courseImage} />
      <View style={styles.courseTags}>
        {tags.map((tag, index) => (
          <Text key={index} style={styles.courseTag}>{tag}</Text>
        ))}
      </View>
      <Text style={styles.courseTitle}>{title}</Text>
      <Text style={styles.coursePrice}>{price}</Text>
      <TouchableOpacity style={styles.getCourseButton}>
        <Text style={styles.getCourseButtonText}>Get this course</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    courseCard: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 18,
      marginRight: 25,
      width: 220,
  
      // 3D Effect
      elevation: 1, // For Android
      shadowColor: "#000", // For iOS
      shadowOffset: { width: 8 ,height: 8 }, // Adds depth
      shadowOpacity: 0.3,
      shadowRadius: 6,
      
      borderWidth: 1, // Thin border to add a layered effect
      borderColor: "rgba(0, 0, 0, 0.1)", // Slightly darker border
    },
    courseImage: {
      width: "100%",
      height: 130,
      borderRadius: 10,
      marginBottom: 12,
    },
    courseTags: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    courseTag: {
      backgroundColor: '#E0E0E0',
      padding: 5,
      borderRadius: 5,
      marginRight: 5,
      fontSize: 12,
    },
    courseTitle: {
      fontSize: 17,
      fontWeight: "500",
      color: "#444",
    },
    coursePrice: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    getCourseButton: {
      backgroundColor: 'black',
      paddingVertical: 12,
      borderRadius: 10,
      marginTop: 12,
      alignSelf: "center",
      width: "80%",
      alignItems: "center",
  
      // Button Shadow for Depth
      shadowColor: "#000",
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    getCourseButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
  });
  