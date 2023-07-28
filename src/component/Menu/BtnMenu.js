import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../assets/color';

function BtnMenu({ navigation }) {
  function goToHome({ navigation }) {
    navigation.navigate('Home');
  }
  return (
    <TouchableOpacity style={styles.buttonBar} onPress={() => goToHome({ navigation })}>
      <Icon name="bars" color={colors.primaryTextColor} size={25} />
    </TouchableOpacity>
  );
}

export default BtnMenu;

const styles = StyleSheet.create({
  buttonBar: {
    padding: 10,
    zIndex: 1,
  },
});
