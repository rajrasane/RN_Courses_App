import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import TabHeader from '../../components/TabHeader';
import SearchBar from '../../components/SearchBar';
import FilterButtons from '../../components/FilterButtons';
import CourseItem from '../../components/CourseItem';
import FilterModal from '../../components/FilterModal';
import coursesData from '../../data/courseData';
import HorizontalRule from '@/components/HorizontalRule';

const Courses = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: [0, 1000],
    duration: [],
  });
  const router = useRouter();

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  const applyFilters = (filters) => {
    setSelectedFilters(filters);
    setFilterModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Courses" />
      <View style={styles.searchWrapper}>
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          onFilterPress={toggleFilterModal} 
          text={'Search for courses'}
          hasFilter={true}
        />
      </View>
      <View style={styles.courseFilter}>
        <FilterButtons filter={filter} setFilter={setFilter} />
      </View>
      <HorizontalRule />
      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        {coursesData.map((course, index) => (
          <CourseItem
            key={index}
            course={course}
            onPress={() => router.push({ pathname: '/coursedetails', params: { course: JSON.stringify(course) } })}
          />
        ))}
        <View style={styles.space} />
      </ScrollView>
      <Modal visible={isFilterModalVisible} animationType="slide">
        <FilterModal 
          filters={selectedFilters} 
          onApply={applyFilters} 
          onClose={toggleFilterModal} 
        />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  searchWrapper: { paddingHorizontal: 20, marginTop: 10 },
  courseFilter: { paddingHorizontal: 20, paddingVertical: 10 },
  courseList: { flex: 1, paddingHorizontal: 15, paddingVertical: 15 },
  space: { padding: 13 },
});

export default Courses;
