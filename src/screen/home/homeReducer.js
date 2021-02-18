import cards from '../../api/data';
import {CARD_SELECTION_DONE} from './HomeActions';

const INITIAL_STATE = {
  availableCards: cards,
  selectedCards: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_SELECTION_DONE:
      state = {
        ...state,
        selectedCards: action.payload.selectedCards,
        availableCards: action.payload.availableCards,
      };
      break;
    default:
      state = INITIAL_STATE;
  }
  return state;
};
