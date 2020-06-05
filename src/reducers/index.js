import {ADD_DECK, DELETE_DECK, GET_DECKS, ADD_CARD} from '../actions/actionTypes'

const decks = (state = null, action) => {
  switch (action.type) {
    case GET_DECKS:
      //console.log("hhh")
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK: {      
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          cards: []
        }
      };
    }
    case ADD_CARD: {
      state[action.deckId] = {
        ...state[action.deckId],
          cards: [
            ...state[action.deckId].cards,
            { question: action.question, answer: action.answer }
          ]
      }
      return {
        ...state
      };
    }
    case DELETE_DECK: {
      //console.log("aaa")
      state[action.deckId] = undefined
      delete state[action.deckId]
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default decks;
