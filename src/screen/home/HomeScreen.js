import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import LottieView from 'lottie-react-native';
import CardComponent from '../../components/CardComponent';
import {CARD_SELECT_CLICKED} from './HomeActions';

const HomeScreen = (props) => {
  const homeProp = useSelector(({home}) => home);
  const dispatch = useDispatch();

  const selectCardClicked = () => {
    dispatch({
      type: CARD_SELECT_CLICKED,
      payload: {
        availableCards: homeProp.availableCards,
        selectedCards: homeProp.selectedCards,
      },
    });
  };

  const renderCardItem = ({item, index}) => {
    let typeOfCard = '';
    switch (item.cardType) {
      case 'Spade':
        typeOfCard = require('../../res/Spade.png');
        break;
      case 'Heart':
        typeOfCard = require('../../res/Heart.png');
        break;
      case 'Diamond':
        typeOfCard = require('../../res/Diamond.png');
        break;
      case 'Flower':
        typeOfCard = require('../../res/Club.png');
        break;
    }
    let cardNumber = item.cardNumer;
    switch (item.cardNumer) {
      case 1:
        cardNumber = 'A';
        break;
      case 11:
        cardNumber = 'J';
        break;
      case 12:
        cardNumber = 'Q';
        break;
      case 13:
        cardNumber = 'K';
        break;
    }
    return <CardComponent typeOfCard={typeOfCard} cardNumber={cardNumber} />;
  };

  const keyExtractor = (item, index) => {
    return item.cardNumer + item.cardType;
  };

  const renderEmptyView = () => {
    return (
      <LottieView
        source={require('../../res/47410-ace-of-spade.json')}
        autoPlay
        loop
        style={styles.noCardViewStyle}
      />
    );
  };

  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={selectCardClicked} style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Select Card</Text>
      </TouchableOpacity>
      <FlatList
        data={homeProp.selectedCards}
        ListEmptyComponent={renderEmptyView}
        numColumns={4}
        renderItem={renderCardItem}
        keyExtractor={keyExtractor}
        style={styles.flatlistStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {alignItems: 'stretch', flex: 1},
  flatlistStyle: {marginTop: 10, alignSelf: 'center', marginBottom: 10},
  buttonStyle: {
    padding: 10,
    backgroundColor: '#00C853',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5,
  },
  buttonTextStyle: {fontWeight: '600', fontSize: 15},
  noCardViewStyle: {width: 100, height: 100, alignSelf: 'center'},
});

export default HomeScreen;
