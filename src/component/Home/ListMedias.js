import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableHighlight, Image } from 'react-native';
import { movies } from '../../../assets/dataNetflix';
import { colors } from '../../../assets/color';

function navigationToDetails({ navigation, key }) {
  navigation.setParams({ key: key });
  navigation.navigate('Details', {
    key: key,
  });
}

function ListMedias({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        horizontal={true}
        key={(movie) => movie.key}
        renderItem={(movie) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigationToDetails({ navigation, key: movie.item.key })}
          >
            <View>
              <Image
                aria-label={movie.item.name}
                style={styles.imageMovie}
                source={movie.item.image}
              />
              <Text style={styles.imageTitle}>{movie.item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default ListMedias;

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  imageTitle: {
    fontSize: 12,
    color: colors.primaryTextColor,
  },
  imageMovie: {
    height: 150,
    width: 120,
  },
  separator: {
    width: 8,
    marginTop: 5,
  },
});
