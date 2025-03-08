import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MessageItem = ({ sender, message, date , image }) => {
  const getImageSource = () => {
    if (image) {
        return { uri: image }; // Assuming 'image' is a URL
    } else {
        return require('../assets/icons/user-icon.png');
      }
  };
  return (
    <View style={styles.container}>
      <Image source={getImageSource()} style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.header}>
          <Text style={styles.sender} numberOfLines={1}>{sender}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.message} numberOfLines={1}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 100,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sender: {
    fontWeight: 'bold',
    fontSize: 16.5,
    flex: 1,
  },
  date: {
    color: 'gray',
    fontSize: 12,
    marginRight: -12,
  },
  message: {
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
  },
});

export default MessageItem;
