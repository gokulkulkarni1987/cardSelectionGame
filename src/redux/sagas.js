import {takeLatest} from 'redux-saga/effects';
import {CARD_SELECT_CLICKED} from '../screen/home/HomeActions';
import {selectCardClicked} from '../screen/home/HomeSagas';

export default function* sagas() {
  yield takeLatest(CARD_SELECT_CLICKED, selectCardClicked);
}
