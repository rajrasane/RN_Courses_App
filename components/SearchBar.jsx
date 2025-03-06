import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <View style={styles.searchContainer}>
    <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Find Course"
      placeholderTextColor="gray"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
    <Ionicons name="options-outline" size={24} color="gray" />
  </View>
);

const styles = StyleSheet.create({
  searchContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff', borderRadius: 8 , marginHorizontal : -9 , marginVertical : 5},
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
});

export default SearchBar;
