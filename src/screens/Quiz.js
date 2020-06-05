import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { white, gray } from "../utils/colors"
import QuizCard from "../components/QuizCard"
import QuizButtons from "../components/QuizButtons"
import Results from "../components/Results"
import NoCard from '../components/NoCard'
import {clearNotification,setNotification} from '../utils/NotificationApi'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("deck").name + " Quiz"
  });

  state = {
    correct: 0,
    incorrect: 0,
    Qindex: 0
  }

  restart = () => {
    this.setState({correct: 0,incorrect: 0,Qindex: 0})
  };

  
  answer = ans => {

    if(this.state.Qindex===this.props.navigation.getParam("deck").cards.length-1)
    {
      clearNotification().then(()=>{
        setNotification().then(()=>{
          if(ans)
          {
            this.setState({Qindex:this.state.Qindex+1, correct:this.state.correct+1})
          }
          else
          {
            this.setState({Qindex:this.state.Qindex+1, incorrect:this.state.incorrect+1})
          }
        })
      })
    }
    else
    {
      if(ans)
      {
        this.setState({Qindex:this.state.Qindex+1, correct:this.state.correct+1})
      }
      else
      {
        this.setState({Qindex:this.state.Qindex+1, incorrect:this.state.incorrect+1})
      }
    }
    
  };

  render() {
    const {correct,incorrect,Qindex} = this.state;

    const deck = this.props.navigation.getParam("deck")
    const cardCount = deck.cards.length
    if(cardCount===0)
      return (
        <NoCard navigation={this.props.navigation}/>
      )
    //console.log(Qindex)
    if(Qindex<cardCount)
      return (
        <View style={styles.container}>
          <QuizCard card={deck.cards[Qindex]} />
          <Text style={styles.count}>{Qindex}/{cardCount}</Text>
          <Text style={styles.count}>Questions Attempted</Text>
          <QuizButtons answer={this.answer} />
        </View>
      )
    else
      return (
        <Results
          correct={correct}
          incorrect={incorrect}
          restart={this.restart}
          navigation={this.props.navigation}
        />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: white,
    padding: 10
  },
  count: {
    color: gray,
    fontSize: 20,
    marginTop: 10
  }
});

export default Quiz;
