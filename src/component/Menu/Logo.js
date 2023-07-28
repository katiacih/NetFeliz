import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { logotipo } from '../../../assets/dataNetflix';

function Logo() {
  return (
    <View style={styles.containerImageLogo}>
      <Image style={styles.imageLogo} source={logotipo.image_logo} />
    </View>
  );
}

export default Logo;

const styles = StyleSheet.create({
  containerImageLogo: {
    position: 'absolute',
    zIndex: 0,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  imageLogo: {
    height: 100,
    width: 100,
  },
});
