import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import TabHeader from "../../components/TabHeader";
import SearchBar from "../../components/SearchBar";
import FilterButtons from "../../components/FilterButtons";
import CourseItem from "../../components/CourseItem";
import FilterModal from "../../components/FilterModal";
import coursesData from "../../data/courseData";
import HorizontalRule from "@/components/HorizontalRule";

const Courses = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
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
      {/* Fixed Header */}
      <TabHeader title="Courses" />

      {/* Fixed Search Bar & Filters */}
      <View style={styles.fixedTopContent}>
        <View style={styles.searchWrapper}>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onFilterPress={toggleFilterModal}
            text={"Search for courses"}
            hasFilter={true}
          />
        </View>

        <View style={styles.courseFilter}>
          <FilterButtons filter={filter} setFilter={setFilter} />
        </View>

        <HorizontalRule />
      </View>

      {/* Scrollable Course List */}
      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          {coursesData.map((course, index) => (
            <CourseItem
              key={index}
              course={course}
              onPress={() =>
                router.push({
                  pathname: "/coursedetails",
                  params: { course: JSON.stringify(course) },
                })
              }
            />
          ))}
        </ScrollView>
      </View>

      {/* Filter Modal */}
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
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  fixedTopContent: {
    backgroundColor: "#f0f0f0", // Ensure same background color
  },
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: 80,
  },
  courseFilter: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 7,
  },
  scrollContainer: {
    flex: 1, // Ensures scrollable content takes remaining space
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexGrow: 1, // Ensures scrolling even when content is small
  },
});

export default Courses;
