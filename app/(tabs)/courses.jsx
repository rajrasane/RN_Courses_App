import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Courses = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const codingCourses = [
    {
      title: 'Web Development Bootcamp',
      author: 'Aarav Sharma',
      price: '₹12,999',
      duration: '20 hours',
      image: require('../../assets/images/webdev.png'),
    },
    {
      title: 'Python for Beginners',
      author: 'Priya Patel',
      price: '₹8,999',
      duration: '15 hours',
      image: require('../../assets/images/python.png'),
    },
    {
      title: 'React Native Mastery',
      author: 'Rahul Singh',
      price: '₹14,999',
      duration: '25 hours',
      image: require('../../assets/images/reactnative.png'),
    },
    {
      title: 'JavaScript Fundamentals',
      author: 'Anjali Kumar',
      price: '₹6,999',
      duration: '12 hours',
      image: require('../../assets/images/javascript.png'),
    },
    {
      title: 'Data Structures and Algorithms',
      author: 'Vikram Choudhary',
      price: '₹10,999',
      duration: '18 hours',
      image: require('../../assets/images/datastructures.png'),
    },
  ];

  const filteredCourses = codingCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Courses</Text>
        {/* <View style={styles.profileIconPlaceholder} /> */}
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Find Course"
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Ionicons name="options-outline" size={24} color="gray" />
      </View>

      <View style={styles.courseFilter}>
        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'All' && styles.filterButtonActive]}
            onPress={() => handleFilter('All')}
          >
            <Text style={[styles.filterButtonText, filter === 'All' && styles.filterButtonTextActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'Popular' && styles.filterButtonActive]}
            onPress={() => handleFilter('Popular')}
          >
            <Text style={[styles.filterButtonText, filter === 'Popular' && styles.filterButtonTextActive]}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'New' && styles.filterButtonActive]}
            onPress={() => handleFilter('New')}
          >
            <Text style={[styles.filterButtonText, filter === 'New' && styles.filterButtonTextActive]}>New</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        {filteredCourses.map((course, index) => (
          <TouchableOpacity
            style={styles.courseItem}
            key={index}
            onPress={() => router.push({ pathname: '/coursedetails', params: { course: JSON.stringify(course) } })}
          >
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
        ))}
        <View style={styles.space}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  profileIconPlaceholder: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#e0e0e0' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, margin: 20, marginTop: -8 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  courseFilter: { paddingHorizontal: 20, paddingVertical: 10 },
  filterButtons: { flexDirection: 'row' },
  filterButtonActive: { backgroundColor: 'black', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginRight: 10 },
  filterButton: { backgroundColor: '#e0e0e0', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginRight: 10 },
  filterButtonTextActive: { color: 'white', fontWeight: 'bold' },
  filterButtonText: { color: '#333' },
  courseList: { flex: 1, paddingHorizontal: 15, paddingVertical: 25 },
  courseItem: { flexDirection: 'row', marginBottom: 25, backgroundColor: '#f9f9f9', padding: 15, borderRadius: 10, elevation: 3 },
  courseImage: { width: 80, height: 80, borderRadius: 10, marginRight: 15 },
  courseDetails: { flex: 1 },
  courseTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  courseAuthor: { fontSize: 16, color: 'gray', marginBottom: 5 },
  coursePriceDuration: { flexDirection: 'row', justifyContent: 'space-between' },
  coursePrice: { fontSize: 18, color: 'black', fontWeight: 'bold' },
  courseDuration: { fontSize: 16, color: 'gray' },
  space: { padding: 13 },
});

export default Courses;