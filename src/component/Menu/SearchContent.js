import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableHighlight } from 'react-native';
import { movies } from '../../../assets/dataNetflix';
import SearchContentItem from './SearchContentItem';

function SearchContent() {
  const [text, setText] = useState('');
  const filterMoviesList = movies.filter((movie) => {
    return movie.name.includes(text);
  });

  const onClickSearch = (item) => {
    console.log(item.name);
    // return <SearchContentItem source={item.name}/>
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filterMoviesList}
        key={(movie) => movie.key}
        horizontal={true}
        renderItem={({ item }) => (
          <SearchContentItem source={item.image} onClickSearch={onClickSearch} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default SearchContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    // opacity: 0.75,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  touchStyle: {
    height: 160,
    width: 140,
    alignItems: 'center',
  },
  separator: {
    width: 5,
    marginTop: 5,
  },
});
