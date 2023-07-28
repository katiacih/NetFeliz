import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../assets/color';
import DisplayMovie from '../component/Detail/DisplayMovie';
import Stars from '../component/Detail/Stars';
import TabMovieDetail from '../component/Detail/TabMovieDetail';
import { movieDetails } from '../../assets/dataNetflix';

const SIZE_HEIGHT = 270;

function Details({ route, navigation }) {
  const { key } = route.params;
  const movie = movieDetails.find((movie) => movie.key == key);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrolView}>
        <DisplayMovie title={movie.name} srcThumbnail={movie.thumbnail} />
        <Stars year={movie.year} classificatorAge={movie.classificatorAge} season={movie.season} />
        <View style={styles.descriptions}>
          <Text style={styles.attractText}>{movie.atractText}</Text>
          <Text style={styles.sinopse}>{movie.sinopse}</Text>
          <Text style={styles.cast}>Cast: {movie.cast}</Text>
          <Text style={styles.creator}>Creator: {movie.creator}</Text>
        </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.touchStyle} onPress={(f) => f}>
            <Icon name="check" color={colors.primaryTextColor} size={25} />
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchStyle} onPress={(f) => f}>
            <Icon name="share-alt" color={colors.primaryTextColor} size={25} />
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Share</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: SIZE_HEIGHT,
          }}
        >
          <TabMovieDetail />
        </View>
      </ScrollView>
    </View>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrolView: {
    backgroundColor: 'black',
  },
  descriptions: {
    height: 180,
    paddingLeft: 15,
    backgroundColor: colors.primaryColor,
  },
  attractText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sinopse: {
    color: 'white',
    paddingTop: 10,
    fontSize: 15,
  },
  cast: {
    color: 'white',
    paddingTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  creator: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerButtons: {
    height: 70,
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  touchStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.75,
    backgroundColor: 'transparent',
    margin: 15,
    padding: 10,
    elevation: 2,
  },
});
