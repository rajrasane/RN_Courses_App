import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome Back, Kristin 👋</Text>
          <Text style={styles.subText}>Continue your learning journey</Text>
        </View>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }}
          style={styles.profileImage}
        />
      </View>

      {/* Progress Card */}
      <LinearGradient
        colors={['#4f46e5', '#6d28d9']}
        style={styles.progressCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.progressText}>Today's Learning</Text>
        <View style={styles.progressRow}>
          <Text style={styles.progressTime}>3 hrs 15 mins</Text>
          <TouchableOpacity>
            <Text style={styles.progressLink}>View Courses</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "65%" }]} />
        </View>
      </LinearGradient>

      {/* Course Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.courseCard}>
            <Image
              source={{ uri: "https://source.unsplash.com/featured/?coding" }}
              style={styles.courseImage}
            />
            <Text style={styles.courseTitle}>Intro to JavaScript</Text>
            {/* <TouchableOpacity style={styles.resumeButton}>
              <Text style={styles.buttonText}>Resume</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.courseCard}>
            <Image
              source={{ uri: "https://source.unsplash.com/featured/?technology" }}
              style={styles.courseImage}
            />
            <Text style={styles.courseTitle}>React Native Basics</Text>
          </View>
        </ScrollView>
      </View>

      {/* Learning Plan */}
      <Text style={styles.sectionTitle}>Learning Goals</Text>
      <View style={styles.learningContainer}>
        <View style={styles.learningCard}>
          <Text style={styles.learningText}>📱 Build a Mobile App</Text>
          <View style={styles.learningRow}>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: "83%" }]} />
            </View>
            <Text style={styles.learningProgress}>50/60</Text>
          </View>
        </View>

        <View style={styles.learningCard}>
          <Text style={styles.learningText}>🖥️ Master Backend Dev</Text>
          <View style={styles.learningRow}>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: "33%" }]} />
            </View>
            <Text style={styles.learningProgress}>10/30</Text>
          </View>
        </View>
      </View>

      {/* Upcoming Sessions */}
      <Text style={styles.sectionTitle}>Upcoming Live Classes</Text>
      <View style={styles.meetupCard}>
        <Ionicons name="videocam" size={24} color="#fff" />
        <Text style={styles.meetupTitle}>Live Coding Session</Text>
        <Text style={styles.meetupText}>Join a live interactive coding class</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subText: {
    color: "gray",
    fontSize: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  progressCard: {
    padding: 25,
    borderRadius: 20,
    marginVertical: 25,
  },
  progressText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  progressTime: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  progressLink: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  progressBarBackground: {
    flex: 1,
    height: 12,
    backgroundColor: "#d1d5db",
    borderRadius: 6,
    marginVertical: 8,
  },
  progressBarFill: {
    height: 12,
    backgroundColor: "#fcd34d",
    borderRadius: 6,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  learningContainer: {
    gap: 15,
  },
  courseImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 200,
  },
  resumeButton: {
    backgroundColor: "#4f46e5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  learningCard: {
    backgroundColor: "#eef2ff",
    padding: 15,
    borderRadius: 12,
  },
  learningRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  learningText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  learningProgress: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6b7280",
  },
  meetupCard: {
    backgroundColor: "#4f46e5",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 15,
  },
  meetupTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  meetupText: {
    color: "#e5e7eb",
    marginTop: 5,
  },
  joinButton: {
    backgroundColor: "#6d28d9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
});