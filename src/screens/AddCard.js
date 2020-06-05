import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import ButtonStyles from '../components/ButtonStyles'
import { blue, green } from "../utils/colors";
import { handlecreateCard } from "../actions/card";
import InputTextStyles from '../components/InputTextStyles'

class AddCard extends Component {
  static navigationOptions = () => ({
    title: "Add Card"
  });

  state = {
    ques: "",
    ans: ""
  };

  handleinput1Change = (val) => {
    this.setState({ ques:val })
  }
  handleinput2Change = (val) => {
    this.setState({ ans:val })
  }

  handleSubmit = () => {

    const { ques, ans } = this.state;
    if(ques.trim().length===0||ans.trim().length===0)
    {
      return alert("Please Enter Complete Details.")
    }

    const deckId = this.props.navigation.getParam("deckId");
    
    this.props.dispatch(handlecreateCard(deckId, ques+"?", ans));

    this.props.navigation.goBack();
  };

  render() {
    const { ques, ans } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.top}>
        <Text style={styles.textStyle}>Enter Your Question</Text>
        <InputTextStyles
          value={ques}
          placeholder="e.g. Full-Form of JDK in Java"
          onChangeText={this.handleinput1Change}
        />
        
        <Text style={styles.textStyle}>Enter Your Answer</Text>
        <InputTextStyles 
          value={ans}
          placeholder="e.g. Java Development Kit"
          onChangeText={this.handleinput2Change}
        />
        
        <ButtonStyles color={green} onPress={this.handleSubmit}>
          <Text>Create Card</Text>
        </ButtonStyles>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default connect()(AddCard);
