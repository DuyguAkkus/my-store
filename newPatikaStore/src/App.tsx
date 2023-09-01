import React from 'react';
import {Text, FlatList, SafeAreaView} from 'react-native';
import styles from './Component/CardStyle';
import data from './Component/data.json';
import Card from './Component/Card';
import Search from './Component/Search';

function App() {
  const renderProps = ({item}) => <Card props={item} />;
  return (
    <SafeAreaView style={styles.headContainer}>
      <Text style={styles.headContainerText}>PATİKASTORE</Text>
      <Search />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProps}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
export default App;
