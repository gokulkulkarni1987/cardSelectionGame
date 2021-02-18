import {put} from 'redux-saga/effects';
import {CARD_SELECTION_DONE} from './HomeActions';

export function* selectCardClicked(action) {
  const {availableCards, selectedCards} = action.payload;
  const noOfCardsAvailable = action.payload.availableCards.length;
  if (noOfCardsAvailable > 5) {
    for (let i = 0; i < 5; i++) {
      const randomCard = Math.floor(Math.random() * (noOfCardsAvailable - i));
      selectedCards.unshift(availableCards[randomCard]);
      availableCards.splice(randomCard, 1);
    }
  } else {
    for (let i = 0; i < noOfCardsAvailable; i++) {
      const randomCard = Math.floor(Math.random() * (noOfCardsAvailable - i));
      selectedCards.unshift(availableCards[randomCard]);
      availableCards.splice(randomCard, 1);
    }
  }

  yield put({
    type: CARD_SELECTION_DONE,
    payload: {
      selectedCards,
      availableCards,
    },
  });
}
