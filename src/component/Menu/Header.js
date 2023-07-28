import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Logo from './Logo';
import BtnMenu from './BtnMenu';
import Search from './Search';

const SIZE_WIDTH = Dimensions.get('window').width;

function Header({ hideSearch = false, navigation } = props) {
  return (
    <View style={styles.container}>
      <BtnMenu navigation={navigation} />
      <Logo />
      {hideSearch ? null : <Search />}
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZE_WIDTH,
    height: 100,
    backgroundColor: 'black',
  },
});
