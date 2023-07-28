import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../assets/color';

function Search() {
  const onPressButtonSearch = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBar} onPress={() => onPressButtonSearch()}>
        {<Icon name="search" color={colors.primaryTextColor} size={25} />}
      </TouchableOpacity>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBar: {
    padding: 10,
    backgroundColor: colors.primaryDarkColor,
  },
});
