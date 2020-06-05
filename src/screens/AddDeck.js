import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import ButtonStyles from "../components/ButtonStyles";
import { handleAddDeck } from "../actions/decks";
import { getId } from "../utils/IdGenerator";
import InputTextStyles from '../components/InputTextStyles'
import {blue, green} from '../utils/colors'

class AddDeck extends Component {
  state = {
    inpt: ""
  };

  handleInputChange = inpt => {
    this.setState(() => ({
      inpt
    }));
  };

  handleSubmit = () => {

    if(this.state.inpt.trim().length===0)
    {
      return alert("Please Enter a Name of your deck.")
    }

    const deck = {
      id: getId(),
      name: this.state.inpt,
      cards: []
    }

    this.props.dispatch(handleAddDeck(deck)).then(()=>{
      this.setState({inpt:""})
      this.props.navigation.navigate("DeckDetail", {
        deckId: deck.id,
        name: deck.name
      });
    })
  }

  render() {
    const { inpt } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.label}>What will you learn in this deck?</Text>
        <InputTextStyles
          value={inpt}
          placeholder="e.g. Java"
          onChangeText={this.handleInputChange}
        />
        <ButtonStyles onPress={this.handleSubmit} color={green}>
          <Text>Create Deck</Text>
        </ButtonStyles>        
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }  
});


export default connect()(AddDeck);
