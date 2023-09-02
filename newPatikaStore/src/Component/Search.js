import React from 'react';
import {TextInput} from 'react-native';
import styles from './CardStyle';

const Search = () => {
  const [text, onChangeText] = React.useState('Search..');
  return (
    <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
  );
};
export default Search;
