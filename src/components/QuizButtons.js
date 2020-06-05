import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { green, red, white } from "../utils/colors";

const QuizButtons = ({ answer }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>How was your answer to this question?</Text>
    <View style={styles.roww}>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: green }]}
        onPress={() => answer(true)}
      >
        <Text style={styles.btnText}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: red }]}
        onPress={() => answer(false)}
      >
        <Text style={styles.btnText}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  roww: {
    flexDirection: "row",
    marginTop: 20
  },
  btn: {
    padding: 20,
    margin: 10,
    width: 150,
    borderRadius: 10
  },
  btnText: {
    color: white,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default QuizButtons;
