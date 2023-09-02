import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  allContainer: {
    width: '50%',
  },
  headContainer: {
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  headContainerText: {
    fontSize: 30,
    color: '#008000',
    fontWeight: 'bold',
  },
  titleContainer: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '400',
    position: 'absolute',
    bottom: 65,
  },
  priceContainer: {
    marginLeft: 10,
    margin: 5,
    marginTop: 50,
  },
  inStockContainer: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'flex-end',
    padding: 2,
  },
  imageContainer: {
    height: 200,
    borderRadius: 10,
    padding: 5,
    margin: 12,
  },
  alwaysContainer: {
    backgroundColor: '#d3d3d3',
    padding: 4,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderBlockColor: '#008000',
  },
  input: {
    fontSize: 20,
    height: 60,
    margin: 10,
    padding: 10,
    width: 400,
    color: '#2f4f4f',
    backgroundColor: '#dcdcdc',
    borderRadius: 15,
    borderWidth: 1,
    borderBlockColor: '#008000',
  },
});
