import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CardStyle';

const Card = ({props}) => {
  return (
    <View style={styles.allContainer}>
      <View style={styles.alwaysContainer}>
        <Image style={styles.imageContainer} source={{uri: props.imgURL}} />
        <Text style={styles.titleContainer}>{props.title}</Text>
        <Text style={styles.priceContainer}>{props.price}</Text>
        <Text style={styles.inStockContainer}>
          {props.inStock ? 'Stokta Var' : 'Stokta Yok'}
        </Text>
      </View>
    </View>
  );
};
export default Card;
