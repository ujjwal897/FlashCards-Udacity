import React, { Component } from "react";
import { Provider } from "react-redux";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {createAppContainer} from 'react-navigation'
import { white, purple } from "./src/utils/colors";
import DeckLists from "./src/screens/DeckLists";
import AddDeck from "./src/screens/AddDeck";
import AddCard from "./src/screens/AddCard";
import DeckDetail from "./src/screens/DeckDetail";
import Quiz from "./src/screens/Quiz";
import store from './src/store/store'
import {setNotification} from './src/utils/NotificationApi'

const Tabs = createBottomTabNavigator(
  {
    DeckLists: {
      screen: DeckLists,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="format-list-bulleted" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="add" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      headerShown: false
    },
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 60,
        backgroundColor: white
      },
      labelStyle: {
        paddingTop: 3,
        fontSize: 14,
        fontWeight: "bold"
      }
    }
  }
);

const MainNavigator = createStackNavigator(
  {
    Home: Tabs,
    DeckDetail: DeckDetail,
    AddCard: AddCard,
    Quiz: Quiz
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: white,
      headerStyle: { backgroundColor: purple },
      headerTitleStyle: { fontWeight: "bold" }
    }
  }
);

const AppContainer = createAppContainer(MainNavigator)

class App extends Component {

  componentDidMount()
  {
    setNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;