import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Account</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/profileexample.jpg')} // Replace with your image path
          style={styles.profileImage}
        />
      </View>

      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.listItemText}>Favourite</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.listItemText}>Edit Account</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.listItemText}>Settings and Privacy</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.listItemText}>Help</Text>
        <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ProfileScreen;