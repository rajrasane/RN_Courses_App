import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import FilterModal from './FilterModal';

const SearchBar = ({ searchQuery, setSearchQuery, applyFilters , text ,hasFilter}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder={text}
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {hasFilter ? (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons style={styles.filter} name="options-outline" size={24} color="gray" />
          </TouchableOpacity> 
        ) : null }
      </View>
      <FilterModal visible={modalVisible} onClose={() => setModalVisible(false)} applyFilters={applyFilters} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: { flexDirection: 'row', alignItems: 'center', padding: 5, backgroundColor: '#fff', borderRadius: 8 },
  searchIcon: { marginRight: 7 , marginLeft: 7},
  searchInput: { flex: 1, fontSize: 16 },
  filter : { marginRight: 7 }
});

export default SearchBar;
