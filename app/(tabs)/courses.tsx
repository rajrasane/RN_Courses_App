import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';

const Courses = () => {
  const codingCourses = [
    {
      title: 'Web Development Bootcamp',
      author: 'Aarav Sharma',
      price: '₹12,999',
      duration: '20 hours',
    },
    {
      title: 'Python for Beginners',
      author: 'Priya Patel',
      price: '₹8,999',
      duration: '15 hours',
    },
    {
      title: 'React Native Mastery',
      author: 'Rahul Singh',
      price: '₹14,999',
      duration: '25 hours',
    },
    {
      title: 'JavaScript Fundamentals',
      author: 'Anjali Kumar',
      price: '₹6,999',
      duration: '12 hours',
    },
    {
      title: 'Data Structures and Algorithms',
      author: 'Vikram Choudhary',
      price: '₹10,999',
      duration: '18 hours',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Courses</Text>
        <View style={styles.profileIconPlaceholder} />
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Find Course"
          placeholderTextColor="gray"
        />
        <Ionicons name="options-outline" size={24} color="gray" />
      </View>

      {/* Commented out the category section as requested previously */}
      {/* <ScrollView horizontal style={styles.categoryScroll}>
        <View style={styles.categoryItem}>
          <Text style={styles.categoryText}>Web Dev</Text>
        </View>
        <View style={styles.categoryItem}>
          <Text style={styles.categoryText}>Python</Text>
        </View>
        <View style={styles.categoryItem}>
          <Text style={styles.categoryText}>Mobile</Text>
        </View>
        <View style={styles.categoryItem}>
          <Text style={styles.categoryText}>JS</Text>
        </View>
        <View style={styles.categoryItem}>
          <Text style={styles.categoryText}>Data</Text>
        </View>
      </ScrollView> */}

      <View style={styles.courseFilter}>
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.filterButtonTextActive}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>New</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.courseList}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileIconPlaceholder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e0e0e0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categoryScroll: {
    paddingVertical: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  categoryItem: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  courseFilter: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterButtons: {
    flexDirection: 'row',
  },
  filterButtonActive: {
    backgroundColor: 'black', // Changed from '#007bff' to 'black'
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  filterButtonTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  filterButtonText: {
    color: '#333',
  },
  courseList: {
    padding: 20,
  },
  courseItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginRight: 20,
  },
  courseDetails: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseAuthor: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  coursePriceDuration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coursePrice: {
    fontSize: 18,
    color: 'black', // Changed from '#007bff' to 'black'
    fontWeight: 'bold',
  },
  courseDuration: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Courses;