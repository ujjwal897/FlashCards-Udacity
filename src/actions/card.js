import {ADD_CARD} from './actionTypes'
import {saveCard} from '../utils/storage'

const createCard = (deckId, question, answer) => ({
    type: ADD_CARD,
    deckId,
    question,
    answer
});

export const handlecreateCard = (deckId, question, answer) => {
    return (dispatch) => {
        return saveCard(deckId, {question, answer})
        .then(()=>{
            dispatch(createCard(deckId,question,answer))
        })
      }
}