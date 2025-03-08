import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BackButton from '../components/BackButton';

const MessageHeader = ({ sender, image }) => {
  return (
    <View style={styles.header}>
      <BackButton />
      <Image
        source={image ? { uri: image } : require('../assets/icons/user-icon.png')}
        style={styles.avatar}
      />
      <Text style={styles.senderText} numberOfLines={1}>
        {sender}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3D5CFF',
    height: 73,
    paddingHorizontal: 15,
    left: 0,
    right: 0,
    zIndex: 10,
    borderBottomWidth: 0.3,
    borderColor: 'gray',
  },
  senderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10, // Moves text right beside the back button
    marginTop: 5,
  },
  avatar: {
    width: 37,
    height: 37,
    borderRadius: 20,
    marginLeft: 60,
    marginTop: 5,
  },
});

export default MessageHeader;
