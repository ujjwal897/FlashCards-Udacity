import React from 'react'
import ButtonStyles from './ButtonStyles'
import { View, Text, StyleSheet } from 'react-native'
import {red} from '../utils/colors'

const NoCard = ({navigation}) => (
    <View style={styles.error}>
        <Text style={styles.errorText}>
        Sorry, You cannot take a quiz because there are no cards in this deck.
        </Text>
        <ButtonStyles color={red} onPress={()=>{navigation.goBack()}}>
        <Text>Click to go back to your deck</Text>
        </ButtonStyles>
    </View>
);
  
const styles = StyleSheet.create({
  error:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  errorText:{
    fontSize: 28,
    fontWeight: "bold",
    margin: 20,
    marginTop: -100,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50
  }
});

export default NoCard