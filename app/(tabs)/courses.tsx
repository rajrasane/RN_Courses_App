import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';

const Courses = () => {
  const codingCourses = [
    { title: 'Web Development Bootcamp', author: 'Aarav Sharma', price: '₹12,999', duration: '20 hours' },
    { title: 'Python for Beginners', author: 'Priya Patel', price: '₹8,999', duration: '15 hours' },
    { title: 'React Native Mastery', author: 'Rahul Singh', price: '₹14,999', duration: '25 hours' },
    { title: 'JavaScript Fundamentals', author: 'Anjali Kumar', price: '₹6,999', duration: '12 hours' },
    { title: 'Data Structures and Algorithms', author: 'Vikram Choudhary', price: '₹10,999', duration: '18 hours' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Courses</Text>
        <View style={styles.profileIconPlaceholder} />
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Find Course" placeholderTextColor="gray" />
        <Ionicons name="options-outline" size={24} color="gray" />
      </View>

      <View style={styles.courseFilter}>
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.filterButtonActive}><Text style={styles.filterButtonTextActive}>All</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterButtonText}>Popular</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterButtonText}>New</Text></TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        {codingCourses.map((course, index) => (
          <View style={styles.courseItem} key={index}>
            <View style={styles.courseImagePlaceholder} />
            <View style={styles.courseDetails}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseAuthor}>{course.author}</Text>
              <View style={styles.coursePriceDuration}>
                <Text style={styles.coursePrice}>{course.price}</Text>
                <Text style={styles.courseDuration}>{course.duration}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  profileIconPlaceholder: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#e0e0e0' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, margin: 20 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  courseFilter: { paddingHorizontal: 20, paddingVertical: 10 },
  filterButtons: { flexDirection: 'row' },
  filterButtonActive: { backgroundColor: 'black', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginRight: 10 },
  filterButton: { backgroundColor: '#e0e0e0', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginRight: 10 },
  filterButtonTextActive: { color: 'white', fontWeight: 'bold' },
  filterButtonText: { color: '#333' },
  courseList: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  courseItem: { flexDirection: 'row', marginBottom: 15, backgroundColor: '#f9f9f9', padding: 15, borderRadius: 10, elevation: 3 },
  courseImagePlaceholder: { width: 80, height: 80, backgroundColor: '#e0e0e0', borderRadius: 10, marginRight: 15 },
  courseDetails: { flex: 1 },
  courseTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  courseAuthor: { fontSize: 16, color: 'gray', marginBottom: 5 },
  coursePriceDuration: { flexDirection: 'row', justifyContent: 'space-between' },
  coursePrice: { fontSize: 18, color: 'black', fontWeight: 'bold' },
  courseDuration: { fontSize: 16, color: 'gray' },
});

export default Courses;
