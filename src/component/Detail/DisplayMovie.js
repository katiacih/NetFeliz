import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../../../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';

const SIZE_WIDTH = Dimensions.get('window').width;
const SIZE_HEIGHT = 270;

function DisplayMovie({ title, srcThumbnail }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerVideoReproductor}>
        <Image style={styles.imageThumbnail} resizeMode="cover" source={srcThumbnail} />
      </View>
      <View style={styles.containerFakeVideoReproductor}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.buttonPlay}>
            <Icon name="play-circle" color={colors.primaryTextColor} size={80} />
          </TouchableOpacity>
        </View>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
    </View>
  );
}

export default DisplayMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageThumbnail: {
    height: '100%',
    width: SIZE_WIDTH,
    zIndex: 0,
  },
  containerVideoReproductor: {
    height: SIZE_HEIGHT,
    backgroundColor: 'pink',
    borderBottomWidth: 10,
    justifyContent: 'center',
    zIndex: 0,
  },
  containerFakeVideoReproductor: {
    height: SIZE_HEIGHT,
    backgroundColor: 'transparent',
    width: SIZE_WIDTH,
    position: 'absolute',
    zIndex: 2,
    padding: 15,
    justifyContent: 'space-around',
  },
  buttonPlay: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.75,
    backgroundColor: 'transparent',
    zIndex: 3,
    marginTop: 60,
    padding: 10,
    elevation: 2,
  },
  txtTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
});
