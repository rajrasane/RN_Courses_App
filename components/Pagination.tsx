import React from 'react';
import { View, StyleSheet } from 'react-native';
import slides from "../data/slideData";

interface PaginationProps {
  currentIndex: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentIndex }) => {
  const isLastSlide = currentIndex === slides.length - 1;

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: isLastSlide ? 48 : 125.5, // Conditional margin
    },
    dot: {
      height: 6,
      borderRadius: 3,
      marginHorizontal: 4,
    },
  });

  return (
    <View style={styles.container}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              width: currentIndex === index ? 12 : 6,
              backgroundColor: currentIndex === index ? "#000000" : "#D3D3D3",
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Pagination;