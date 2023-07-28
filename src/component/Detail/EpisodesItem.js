import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors } from '../../../assets/color';
import { episodesTab } from '../../../assets/dataNetflix';

const SIZE_WIDTH = Dimensions.get('window').width;

function EpisodesItem({ resume }) {
  return (
    <View style={styles.containerEpisodes}>
      <View style={styles.episodes}>
        <View style={styles.contentEpisodes}>
          <Image style={styles.image} source={episodesTab.ep1} resizeMode="center" />
        </View>
        <View style={{ flex: 1, paddingLeft: 8 }}>
          <Text style={styles.txt}>1. Episode</Text>
          <Text style={styles.txt}>{resume}</Text>
        </View>
      </View>
    </View>
  );
}

export default EpisodesItem;

const styles = StyleSheet.create({
  containerEpisodes: {
    height: 130,
    width: SIZE_WIDTH,
    backgroundColor: colors.primaryColor,
    padding: 8,
  },
  episodes: {
    flex: 1,
    flexDirection: 'row',
  },
  contentEpisodes: {
    backgroundColor: 'transparent',
    height: 130,
  },
  image: {
    height: 130,
    width: 160,
  },
  txt: {
    color: colors.darkTextHighEmphasis,
  },
});
