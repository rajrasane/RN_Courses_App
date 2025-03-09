import React from "react";
import { View, Text, ScrollView, FlatList, StyleSheet, StatusBar } from "react-native";
import TabHeader from "../../components/TabHeader";
import Banner from "../../components/HomeBanner";
import CourseCard from "../../components/HomeCourseCard";
import ExperienceSection from "../../components/HomeExperience";

const courses = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    price: "₹ 9,999",
    tags: ["LIVE SESSIONS"],
    image: require("../../assets/images/course_temp.jpg"),
  },
  {
    id: "2",
    title: "Python for Data Science",
    price: "₹ 12,499",
    tags: ["SELF-PACED"],
    image: require("../../assets/images/course_temp.jpg"),
  },
];

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor="#2C47B9" barStyle="light-content" />

      {/* Fixed Header */}
      <TabHeader title="Home" />

      {/* Scrollable Content */}
      <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 60 }} showsVerticalScrollIndicator={false}>
        <Banner />

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popular Courses</Text>
          <FlatList
            data={courses}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CourseCard {...item} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.courseList}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recently Added Courses</Text>
          <FlatList
            data={courses}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CourseCard {...item} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.courseList}
          />
        </View>

        <ExperienceSection />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginVertical: 19,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  courseList: {
    paddingLeft: 5,
  },
});
