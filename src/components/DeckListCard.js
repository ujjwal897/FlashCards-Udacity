import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { white, gray, green } from "../utils/colors";

const DeckListCard = ({ id, name, cardCount, navigation }) => (
  <TouchableOpacity style={styles.list}
    onPress={() => navigation.navigate("DeckDetail", { deckId: id, name: name })}
  >
    <Text style={styles.cardname}>{name}</Text>
    {cardCount===1? 
    <Text style={styles.cardcount}>{cardCount} Card</Text>
    : <Text style={styles.cardcount}>{cardCount} Cards</Text>}

  </TouchableOpacity>
);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
    minHeight: 155,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: green
  },
  cardname: {
    fontSize: 35,
    marginBottom: 10
  },
  cardcount: {
    fontSize: 23,
    color: gray,
    marginBottom: 15
  }
});

export default DeckListCard;
