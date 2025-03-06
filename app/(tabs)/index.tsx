import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import TabHeader from '@/components/tabheader'; // Assuming this component exists

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor="#2C47B9" barStyle="light-content" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
          <TabHeader title="Home" />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Continue Learning</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.courseCard}>
                <Image
                  source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZfF6a5sM19EW71iIlrzRBuuLJMCMxQ7vTQ&s" }}
                  style={styles.courseImage}
                />
                <Text style={styles.courseTitle}>React Native</Text>
                <TouchableOpacity style={styles.resumeButton}>
                  <Text style={styles.buttonText}>Resume</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.courseCard}>
                <Image
                  source={{ uri: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200" }}
                  style={styles.courseImage}
                />
                <Text style={styles.courseTitle}>Mastering JavaScript</Text>
                <TouchableOpacity style={styles.resumeButton}>
                  <Text style={styles.buttonText}>Resume</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Popular Courses</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.courseCard}>
                <Image
                  source={{ uri: "https://miro.medium.com/v2/resize:fit:700/1*3IcLSFuT8PQg4cUBaRXH1A.png" }}
                  style={styles.courseImage}
                />
                <Text style={styles.courseTitle}>Python for Data Science</Text>
              </View>
              <View style={styles.courseCard}>
                <Image
                  source={{ uri: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg" }}
                  style={styles.courseImage}
                />
                <Text style={styles.courseTitle}>Full-Stack Web Development</Text>
              </View>
            </ScrollView>
          </View>

        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  section: {
    marginVertical: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333",
  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginRight: 15,
    width: 220,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  courseImage: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    marginBottom: 12,
  },
  courseTitle: {
    fontSize: 17,
    fontWeight: "500",
    color: "#444",
  },
  resumeButton: {
    backgroundColor: "#2C47B9",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 12,
    alignSelf: "center",
    width: "80%",  // Ensures button has the same width
    alignItems: "center", // Ensures text is centered
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
