import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import TabHeader from '../../components/tabheader';
import SearchBar from '../../components/SearchBar';
import FilterButtons from '../../components/FilterButtons';
import CourseItem from '../../components/CourseItem';
import coursesData from '../../data/courseData';

const Courses = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Courses" />
      <View style={styles.searchWrapper}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>
      <View style={styles.courseFilter}>
        <FilterButtons filter={filter} setFilter={setFilter} />
      </View>
      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        {filteredCourses.map((course, index) => (
          <CourseItem
            key={index}
            course={course}
            onPress={() => router.push({ pathname: '/coursedetails', params: { course: JSON.stringify(course) } })}
          />
        ))}
        <View style={styles.space} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchWrapper: { paddingHorizontal: 20, marginTop: 10 },
  courseFilter: { paddingHorizontal: 20, paddingVertical: 10 },
  courseList: { flex: 1, paddingHorizontal: 15, paddingVertical: 15 },
  space: { padding: 13 },
});

export default Courses;
