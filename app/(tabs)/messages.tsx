import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Messages = () => {
  const notifications = [
    {
      id: 1,
      icon: '📰', // Replace with an appropriate icon component or image
      message: 'Successful purchase!',
      time: 'Just now',
    },
    {
      id: 2,
      icon: '📄', // Replace with an appropriate icon component or image
      message: 'Congratulations on completing the ...',
      time: 'Just now',
    },
    {
      id: 3,
      icon: '📄', // Replace with an appropriate icon component or image
      message: 'Your course has been updated, you ...',
      time: 'Just now',
    },
    {
      id: 4,
      icon: '📄', // Replace with an appropriate icon component or image
      message: 'Congratulations, you have ...',
      time: 'Just now',
    },
  ];

  return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <View style={styles.tabs}>
          <Text style={styles.tabActive}>message</Text>
          <Text style={styles.tab}>notification</Text>
        </View>
      </View>

      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notificationItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>{notification.icon}</Text>
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.message}>{notification.message}</Text>
            <Text style={styles.time}>{notification.time}</Text>
          </View>
        </View>
      ))}
      </SafeAreaView>
    </ScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    fontSize: 16,
    color: '#888',
    marginRight: 20,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#007bff', // Example active tab color
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0', // Example background color
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
  },
  notificationText: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
});

export default Messages;