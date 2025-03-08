import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterButtons = ({ filter, setFilter }) => {
  const filters = ['All', 'Popular', 'New'];

  return (
    <View style={styles.filterButtons}>
      {filters.map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.filterButton, filter === item && styles.filterButtonActive]}
          onPress={() => setFilter(item)}
        >
          <Text style={[styles.filterButtonText, filter === item && styles.filterButtonTextActive]}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filterButtons: { flexDirection: 'row' , marginBottom: -4},
  filterButton: { backgroundColor: '#e0e0e0', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginRight: 10 },
  filterButtonActive: { backgroundColor: 'black' },
  filterButtonText: { color: '#333' },
  filterButtonTextActive: { color: 'white', fontWeight: 'bold' },
});

export default FilterButtons;
