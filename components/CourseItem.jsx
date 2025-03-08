import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CourseItem = ({ course, onPress }) => (
  <TouchableOpacity style={styles.courseItem} onPress={onPress}>
    <Image source={course.image} style={styles.courseImage} />
    <View style={styles.courseDetails}>
      <Text style={styles.courseTitle}>{course.title}</Text>
      <Text style={styles.courseAuthor}>{course.author}</Text>
      <View style={styles.coursePriceDuration}>
        <Text style={styles.coursePrice}>{course.price}</Text>
        <Text style={styles.courseDuration}>{course.duration}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  courseItem: { flexDirection: 'row', marginBottom: 20, backgroundColor: '#f9f9f9', padding: 15, borderRadius: 10, elevation: 2 },
  courseImage: { width: 80, height: 80, borderRadius: 10, marginRight: 15 },
  courseDetails: { flex: 1 },
  courseTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  courseAuthor: { fontSize: 16, color: 'gray', marginBottom: 5 },
  coursePriceDuration: { flexDirection: 'row', justifyContent: 'space-between' },
  coursePrice: { fontSize: 18, color: 'black', fontWeight: 'bold' },
  courseDuration: { fontSize: 16, color: 'gray' },
});

export default CourseItem;
