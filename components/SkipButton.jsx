import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const SkipButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Skip</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 50,
    right: 26,
    zIndex: 1,
  },
  text: {
    color: "gray",
    fontSize: 19,
    fontWeight: "semiBold",
  },
});

export default SkipButton;