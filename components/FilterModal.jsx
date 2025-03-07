import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const FilterModal = ({ visible, onClose, applyFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [selectedDuration, setSelectedDuration] = useState(null);

  const categories = ['Design', 'Painting', 'Coding', 'Music', 'Visual Identity', 'Mathematics'];
  const durations = ['3-8 Hours', '8-14 Hours', '14-20 Hours', '20-24 Hours', '24-30 Hours'];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  const applyFilterHandler = () => {
    applyFilters({ selectedCategories, priceRange, selectedDuration });
    onClose();
  };

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.title}>Search Filter</Text>

          {/* Categories */}
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.buttonGroup}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.filterButton, selectedCategories.includes(category) && styles.selectedButton]}
                onPress={() => toggleCategory(category)}
              >
                <Text style={[styles.filterText, selectedCategories.includes(category) && styles.selectedText]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Price Slider */}
          <Text style={styles.sectionTitle}>Price</Text>
          <View style={styles.sliderContainer}>
            <Text>₹{priceRange[0]}</Text>
            <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={6999}
            maximumValue={14999}
            step={500} // Adjust step size for better control
            value={priceRange[1]}
            onValueChange={(value) => setPriceRange([priceRange[0], value])}
            minimumTrackTintColor="#4F46E5"
            thumbTintColor="#4F46E5"
            />
            <Text>₹{priceRange[1]}</Text>
          </View>

          {/* Duration */}
          <Text style={styles.sectionTitle}>Duration</Text>
          <View style={styles.buttonGroup}>
            {durations.map((duration, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.filterButton, selectedDuration === duration && styles.selectedButton]}
                onPress={() => setSelectedDuration(duration)}
              >
                <Text style={[styles.filterText, selectedDuration === duration && styles.selectedText]}>
                  {duration}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.clearButton} onPress={() => setSelectedCategories([])}>
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={applyFilterHandler}>
              <Text style={styles.applyText}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: { width: '90%', backgroundColor: '#fff', padding: 20, borderRadius: 12 },
  closeButton: { alignSelf: 'flex-end' },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 15 },
  buttonGroup: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
  filterButton: { padding: 10, margin: 5, borderRadius: 8, backgroundColor: '#E5E7EB' },
  selectedButton: { backgroundColor: '#4F46E5' },
  filterText: { color: '#000' },
  selectedText: { color: '#fff', fontWeight: 'bold' },
  sliderContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  clearButton: { borderWidth: 1, borderColor: '#4F46E5', padding: 10, borderRadius: 8, flex: 1, marginRight: 10 },
  clearText: { color: '#4F46E5', textAlign: 'center' },
  applyButton: { backgroundColor: '#4F46E5', padding: 10, borderRadius: 8, flex: 1 },
  applyText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});

export default FilterModal;
