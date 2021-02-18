import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CardComponent = (props) => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.topTextStye}>{props.cardNumber}</Text>
      <Image
        source={props.typeOfCard}
        style={styles.imageStye}
        resizeMode={'center'}
      />
      <Text style={styles.bottmTextStyle}>{props.cardNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    width: 80,
    backgroundColor: '#64FFDA',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  topTextStye: {alignSelf: 'flex-start', marginLeft: 5, marginTop: 5},
  bottmTextStyle: {alignSelf: 'flex-end', marginRight: 5, marginBottom: 5},
  imageStye: {
    width: 50,
    height: 60,
    alignSelf: 'center',
  },
});

export default CardComponent;
