import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

export default function Banner() {
  return (
    <ImageBackground source={require('../assets/images/banner_violet_bg.png')} style={styles.banner}>
      <View style={styles.bannerContent}>
        <Text style={styles.bannerTitle}>You are almost there!</Text>
        <Text style={styles.bannerSubtitle}>Enroll now and start your coding journey</Text>
        <View style={styles.courseCardBanner}>
          <Image source={require('../assets/images/course_temp.jpg')} style={styles.courseImageBanner} />
          <View style={styles.courseDetailsBanner}>
            <View style={styles.courseTagsBanner}>
              <Text style={styles.courseTagBanner}>LIVE SESSIONS</Text>
              {/* <Text style={styles.courseTagBanner}>BEGINNER FRIENDLY</Text> */}
            </View>
            <Text style={styles.courseTitleBanner}>Web Development Bootcamp</Text>
            <Text style={styles.coursePriceBanner}>₹ 9,999</Text>
            <TouchableOpacity style={styles.buyNowButton}>
              <Text style={styles.buyNowButtonText}>Enroll Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    padding: 20,
    paddingBottom: 30,
    marginBottom: -10,
  },
  bannerContent: { flex: 1 },
  bannerTitle: {
    fontSize: 22.5,
    fontWeight: '500',
    color: 'white',
    marginBottom: 2,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
  },
  courseCardBanner: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
  },
  courseImageBanner: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  courseDetailsBanner: { flex: 1 },
  courseTagsBanner: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  courseTagBanner: {
    backgroundColor: '#E0E0E0',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    fontSize: 12,
  },
  courseTitleBanner: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  coursePriceBanner: {
    fontSize: 16,
    color: '#black',
    fontWeight: 'bold',
  },
  buyNowButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  buyNowButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
