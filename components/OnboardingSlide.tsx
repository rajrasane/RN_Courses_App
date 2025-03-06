import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get("window");

interface SlideProps {
  image: any;
  title: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({ image, title, description }) => {
  return (
    <View style={styles.slide}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={{ height: 20 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginTop: 10,
    marginBottom : -30,
  },
});

export default Slide;