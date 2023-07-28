import React from 'react';
import { Image, TouchableHighlight, StyleSheet } from 'react-native';

function SearchContentItem({ source, onClickSearch }) {
  return (
    <TouchableHighlight style={styles.touchStyle} onPress={(event) => onClickSearch(event)}>
      <Image style={styles.imageMovie} resizeMode="stretch" source={source} />
    </TouchableHighlight>
  );
}

export default SearchContentItem;

const styles = StyleSheet.create({
  imageMovie: {
    height: 150,
    width: 120,
  },
  touchStyle: {
    height: 160,
    width: 140,
    alignItems: 'center',
  },
});
