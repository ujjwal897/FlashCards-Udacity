import { AsyncStorage } from "react-native";
export const MY_STORAGE_KEY = "Jaspreet-37349FlashCards";

export const getStoredDecks = () => {
  return AsyncStorage.getItem(MY_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
};

export const saveDeck = deck => {
  return AsyncStorage.mergeItem(
    MY_STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  );
};

export const saveCard = (deckId, card) => {
  return AsyncStorage.getItem(MY_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    data[deckId] = {
      ...data[deckId],
      cards: [
        ...data[deckId].cards,
        { question: card.question, answer: card.answer }
      ]
    };

    AsyncStorage.setItem(MY_STORAGE_KEY, JSON.stringify(data));
  });
};

export const removeDeck = (deckId) =>{
  return AsyncStorage.getItem(MY_STORAGE_KEY).then(results=>{
    const data = JSON.parse(results);
    data[deckId] = undefined
    delete data[deckId]
    AsyncStorage.setItem(MY_STORAGE_KEY, JSON.stringify(data))
  })
}
