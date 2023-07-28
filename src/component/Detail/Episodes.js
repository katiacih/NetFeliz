import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../../assets/color';
import EpisodesItem from './EpisodesItem';

function Episodes() {
  const resume =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  return (
    <ScrollView>
      <View style={styles.container}>
        <EpisodesItem resume={resume} />
        <EpisodesItem resume={resume} />
        <EpisodesItem resume={resume} />
        <EpisodesItem resume={resume} />
        <EpisodesItem resume={resume} />
        <EpisodesItem resume={resume} />
        <EpisodesItem resume={resume} />
      </View>
    </ScrollView>
  );
}

export default Episodes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
});
