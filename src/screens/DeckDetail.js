import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import ButtonStyles from "../components/ButtonStyles";
import { green, gray, white, red, lightPurp } from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import {handledeleteDeck} from '../actions/decks'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name")
  });

  deletee = ()=>{
    const {deck, navigation, dispatch} = this.props

    dispatch(handledeleteDeck(deck.id))

    navigation.goBack()
  }

  render() {

    const {navigation,error} = this.props;

    if(error)
    {
      return(
        navigation.goBack()
      )
    }

    const { deck } = this.props
    const count = deck.cards.length
    return (
      <View style={styles.container}>
        
        <Text style={styles.name}>{deck.name}</Text>
        {count===1? 
        <Text style={styles.cardcount}>{count} Card</Text>
        : <Text style={styles.cardcount}>{count} Cards</Text>}
            
        <ButtonStyles color={green}
          onPress={() => {
            navigation.navigate("Quiz", { deck });
          }}
        >
          <Text>Start Quiz</Text>
        </ButtonStyles>

        <ButtonStyles
          color={lightPurp}
          onPress={() => {
            navigation.navigate("AddCard", { deckId: deck.id });
          }}
        >
          <Text>Add Card</Text>
        </ButtonStyles>
        
          <TouchableOpacity onPress={this.deletee}>
            <Text style={styles.deletebtn}>Delete Deck</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 5
  },
  cardcount: {
    fontSize: 23,
    color: gray,
    marginBottom: 10
  },
  deletebtn:{
    fontSize: 20,
    fontWeight: "bold",
    color: red,
    marginTop: 20
  }
});

const mapStateToProps = (state, { navigation }) => {
  const deck = state[navigation.getParam("deckId")]
  //console.log(typeof deck === "undefined")
  if(typeof deck === "undefined")
  {
    console.log("jfj")
    return {
      error: true
    }
  }
  return {
    deck,
    error:false
  }
}

export default connect(mapStateToProps)(DeckDetail);
