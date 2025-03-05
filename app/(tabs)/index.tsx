import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <ScrollView style={[styles.container, { flexGrow: 1 }]} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, Kristin</Text>
            <Text style={styles.subText}>Let's start learning</Text>
          </View>
          <Image
            source={{ uri: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=" }}
            style={styles.profileImage}
          />
        </View>

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

        <Text style={styles.sectionTitle}>Upcoming Live Classes</Text>
        <View style={styles.meetupCard}>
          <Ionicons name="videocam" size={24} color="#fff" />
          <Text style={styles.meetupTitle}>Live Coding Session</Text>
          <Text style={styles.meetupText}>Join a live interactive coding class</Text>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#3D5CFF',
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 90,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
  },
  subText: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
  },
  profileImage: {
    width: 45,
    height: 45,
    marginRight: 15,
    borderRadius: 30,
  },
  progressCard: {
    padding: 20,
    borderRadius: 20,
    marginTop: -60,
    marginBottom: 30,
    margin: 10,
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
    marginLeft: 10,
  },
  learningContainer: {
    gap: 15,
    margin: 10,
    marginBottom: 40,
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
    backgroundColor: "#000", // Black button
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff", // White text
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
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 50
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
    marginVertical: 15,
  },
});