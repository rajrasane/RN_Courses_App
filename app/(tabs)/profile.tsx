import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TabHeader from '../../components/TabHeader';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Tab Header */}
      <TabHeader title="Profile" />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/profileexample.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
        </View>

        {/* Menu Options */}
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemContent}>
            <MaterialCommunityIcons name="heart-outline" size={24} color="#007bff" />
            <Text style={styles.listItemText}>Favourite</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemContent}>
            <MaterialCommunityIcons name="account-edit-outline" size={24} color="#007bff" />
            <Text style={styles.listItemText}>Edit Account</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemContent}>
            <MaterialCommunityIcons name="security" size={24} color="#007bff" />
            <Text style={styles.listItemText}>Settings and Privacy</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemContent}>
            <MaterialCommunityIcons name="help-circle-outline" size={24} color="#007bff" />
            <Text style={styles.listItemText}>Help</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60, // Push content below TabHeader
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 15,
  },
  logoutButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    margin: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
