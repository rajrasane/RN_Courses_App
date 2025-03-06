import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import BackButton from '@/components/BackButton'
import getCourseDescription from '@/data/courseDescription';

const CourseDetails = () => {
  const params = useLocalSearchParams();
  const parsedCourse = JSON.parse(Array.isArray(params.course) ? params.course[0] : params.course); // Correctly access and parse the course data
  const navigation = useNavigation();

  interface Course {
    title: string;
    image: any;
    price: string;
    duration: string;
  }


  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image source={parsedCourse.image} style={styles.heroImage} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.courseTitle}>{parsedCourse.title}</Text>
        </View>

        <View style={styles.detailsSection}>
          <Text style={styles.coursePrice}>{parsedCourse.price}</Text>
          <Text style={styles.courseStats}>{parsedCourse.duration} • 24 Lessons</Text>
          <Text style={styles.sectionTitle}>About this course</Text>
          <Text style={styles.description}>{getCourseDescription(parsedCourse.title)}</Text>
        </View>

        <View style={styles.lessonsSection}>
          <Text style={styles.sectionTitle}>Lessons</Text>
          {["Welcome to the Course", "Process Overview", "Discovery"].map((title, index) => (
            <View key={index} style={styles.lessonItem}>
              <Text style={styles.lessonNumber}>{index + 1}</Text>
              <View style={styles.lessonDetails}>
                <Text style={styles.lessonTitle}>{title}</Text>
                <Text style={styles.lessonDuration}>6:10 mins</Text>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Ionicons name={index === 2 ? "lock-closed" : "play-circle"} size={24} color={index === 2 ? "gray" : "#007bff"} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.favoriteButton}>
            <FontAwesome name="heart-o" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 15,
    zIndex: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  heroContainer: { position: 'relative', height: 250 },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    marginTop: -10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  detailsSection: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  coursePrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  courseStats: { fontSize: 16, color: 'gray', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  description: { fontSize: 16, color: '#333', lineHeight: 22 },
  lessonsSection: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  lessonNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 15,
    color: '#000',
  },
  lessonDetails: { flex: 1 },
  lessonTitle: { fontSize: 16, fontWeight: 'bold' },
  lessonDuration: { fontSize: 14, color: 'gray', marginTop: 2 },
  playButton: { padding: 5 },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  favoriteButton: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  buyButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default CourseDetails;