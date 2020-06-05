import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DeckListCard from "../components/DeckListCard";
import ButtonStyles from "../components/ButtonStyles";
import {handleGetDecks} from '../actions/decks'
import { white, red } from "../utils/colors";

class DeckLists extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.props.dispatch(handleGetDecks(()=>{this.setState({loading:true})}))
  }

  render() {
    const { decks, navigation } = this.props;
    //console.log(navigation)
    if (!this.state.loading) {
      return (
        <View style={styles.loading}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return Object.values(decks).length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={Object.values(decks)}
            renderItem={({ item }) => (
              <DeckListCard
                id={item.id}
                name={item.name}
                cardCount={item.cards.length}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      ) : (
        <View style={styles.loading}>
          <Text style={{ fontSize: 25,margin: 20 }}>You don't have any decks yet.</Text>
          <ButtonStyles
            color={red}
            onPress={() => {
              navigation.navigate("AddDeck");
            }}
          >
            Create Deck
          </ButtonStyles>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    padding: 10,
    paddingTop:30
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(DeckLists);
