import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import MessageHeader from '../../components/MessageHeader';
import MessageBubble from '../../components/MessageBubble';

const ChatsScreen = () => {
  const { sender, message, date } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <MessageHeader sender={sender} />

      <ScrollView contentContainerStyle={styles.messagesContainer}>
        <Text style={styles.date}>{date}</Text>

        {/* Reusable MessageBubble Component */}
        <MessageBubble message={message} timestamp="09:06 pm" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  date: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    marginBottom: 12,
  },

  messagesContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
});

export default ChatsScreen;
