import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { white, orange } from "../utils/colors";

const ButtonStyles = ({ children, onPress, color }) => (
  <TouchableOpacity style={[styles.button, {backgroundColor:color}]} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 13,
    margin: 12,
    padding: 14,
    alignSelf:"stretch",
    marginLeft: 45,
    marginRight: 45
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: orange
  }
});

export default ButtonStyles;
