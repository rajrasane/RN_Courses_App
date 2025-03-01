import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, Kristin</Text>
          <Text style={styles.subText}>Let’s start learning</Text>
        </View>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }}
          style={styles.profileImage}
        />
      </View>

      {/* Progress Card */}
      <View style={styles.progressCard}>
        <Text style={styles.subText}>Learned today</Text>
        <View style={styles.progressRow}>
          <Text style={styles.progressTime}>46min</Text>
          <Text style={styles.progressLink}>My courses</Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>
      </View>

      {/* Course Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What do you want to learn today?</Text>
        <View style={styles.courseRow}>
          <View style={styles.courseCard}>
            <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.courseImage} />
            <TouchableOpacity style={styles.getStartedButton}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.courseCard, styles.courseCardMargin]}>
            <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.courseImage} />
          </View>
        </View>
      </View>

      {/* Learning Plan */}
      <Text style={styles.sectionTitle}>Learning Plan</Text>
      <View style={styles.learningCard}>
        <View style={styles.learningRow}>
          <Text style={styles.learningText}>📦 Packaging Design</Text>
          <Text style={styles.learningProgress}>40/48</Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "83%" }]} />
        </View>
      </View>

      <View style={styles.learningCard}>
        <View style={styles.learningRow}>
          <Text style={styles.learningText}>📐 Product Design</Text>
          <Text style={styles.learningProgress}>6/24</Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "25%" }]} />
        </View>
      </View>

      {/* Meetup Card */}
      <View style={styles.meetupCard}>
        <Text style={styles.meetupTitle}>Meetup</Text>
        <Text style={styles.meetupText}>Off-line exchange of learning experience</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    color: "gray",
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  progressCard: {
    backgroundColor: "#f3f4f6",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressTime: {
    fontSize: 24,
    fontWeight: "bold",
  },
  progressLink: {
    color: "#3b82f6",
  },
  progressBarBackground: {
    width: "100%",
    height: 8,
    backgroundColor: "#d1d5db",
    borderRadius: 4,
    marginTop: 8,
  },
  progressBarFill: {
    width: "75%",
    height: 8,
    backgroundColor: "#f97316",
    borderRadius: 4,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  courseRow: {
    flexDirection: "row",
    marginTop: 12,
  },
  courseCard: {
    width: "48%",
    backgroundColor: "#dbeafe",
    padding: 16,
    borderRadius: 10,
  },
  courseCardMargin: {
    marginLeft: 10,
  },
  courseImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  getStartedButton: {
    backgroundColor: "#f97316",
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  learningCard: {
    backgroundColor: "#f3f4f6",
    padding: 16,
    borderRadius: 10,
    marginTop: 8,
  },
  learningRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  learningText: {
    color: "#374151",
  },
  learningProgress: {
    color: "gray",
  },
  meetupCard: {
    backgroundColor: "#e9d5ff",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  meetupTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6b21a8",
  },
  meetupText: {
    color: "#7c3aed",
    marginTop: 5,
  },
});