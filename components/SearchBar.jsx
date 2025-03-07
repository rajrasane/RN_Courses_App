import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import FilterModal from './FilterModal';

const SearchBar = ({ searchQuery, setSearchQuery, applyFilters }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Find Course"
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="options-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <FilterModal visible={modalVisible} onClose={() => setModalVisible(false)} applyFilters={applyFilters} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff', borderRadius: 8 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
});

export default SearchBar;
