import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';

const MessageHeader = ({ sender }) => {
  return (
    <View style={styles.header}>
      <BackButton />
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 55, // Moves text right beside the back button
    marginTop: 5,
  },
});

export default MessageHeader;