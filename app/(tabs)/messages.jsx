import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import TabHeader from '../../components/tabheader';

const Messages = () => {
  const notifications = [
    { id: 1, icon: 'checkmark-circle-outline', message: 'Successful purchase!', time: 'Just now' },
    { id: 2, icon: 'trophy-outline', message: 'Congratulations on completing the course!', time: '2 mins ago' },
    { id: 3, icon: 'refresh-circle-outline', message: 'Your course has been updated, check it out!', time: '5 mins ago' },
    { id: 4, icon: 'ribbon-outline', message: 'Congratulations, you have achieved a new badge!', time: '10 mins ago' },
    { id: 5, icon: 'notifications-outline', message: 'New lesson available in your learning path.', time: '15 mins ago' },
    { id: 6, icon: 'mail-outline', message: 'You have a new message in your inbox', time: '30 mins ago' },
    { id: 7, icon: 'information-circle-outline', message: 'System maintenance scheduled for tonight', time: '1 hour ago' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Messages"  />
      <ScrollView>
        {notifications.map(({ id, icon, message, time }) => (
          <View key={id} style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              <Ionicons name={icon} size={24} color="#007bff" />
            </View>
            <View>
              <Text style={styles.message}>{message}</Text>
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0f2fe',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#777',
  },
});

export default Messages;
