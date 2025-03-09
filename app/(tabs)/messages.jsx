import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import TabHeader from '../../components/TabHeader';
import SearchBar from '@/components/SearchBar';
import HorizonatalRule from '@/components/HorizontalRule';
import MessageList from '@/components/MessageList';

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabHeader title="Messages"  />
      <View style={styles.searchWrapper}>
        <SearchBar 
          text={'Search messages by name'}
          hasFilter={false}
        />
      </View>
      <HorizonatalRule />
      
      <View style={{ flex: 1 }}>
        <MessageList />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: 80,
    marginBottom: 12,
  },
});

export default Messages;
