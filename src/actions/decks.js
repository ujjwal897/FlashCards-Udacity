import {DELETE_DECK, GET_DECKS, ADD_DECK} from './actionTypes'
import {getStoredDecks, removeDeck, saveDeck} from '../utils/storage'

const createDeck = ({id,name}) => ({
    type: ADD_DECK,
    id,
    name
});

const deleteDeck = (deckId) => ({
    type: DELETE_DECK,
    deckId: deckId
});

const getDecks = decks => ({
    type: GET_DECKS,
    decks
});


export const handleGetDecks = (func) =>{
    return (dispatch) => {
        return getStoredDecks()
        .then(decks => dispatch(getDecks(decks)))
        .then(() => {
        func()
        });
    }
}

export const handledeleteDeck = (deckId)=>{
    return (dispatch) => {
      return removeDeck(deckId)
      .then(()=>{
          dispatch(deleteDeck(deckId))
      })
    }
    
}

export const handleAddDeck = (deck)=>{
    return (dispatch) => {
      return saveDeck(deck)
      .then(()=>{
          dispatch(createDeck(deck))
      })
    }
    
}