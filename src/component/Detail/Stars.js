import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../assets/color';

function Stars({ year, classificatorAge, season }) {
  return (
    <View style={styles.contStars}>
      <View style={styles.content}>
        <Icon name="star" color={colors.secondaryColor} size={20} />
        <Icon name="star" color={colors.secondaryColor} size={20} />
        <Icon name="star" color={colors.secondaryColor} size={20} />
        <Icon name="star" color={colors.secondaryColor} size={20} />
        <Icon name="star" color={colors.secondaryColor} size={20} />
      </View>
      <Text style={styles.text}>{year}</Text>
      <Text style={styles.text}>{classificatorAge}</Text>
      <Text style={styles.text}>{season} Season</Text>
    </View>
  );
}

export default Stars;

const styles = StyleSheet.create({
  contStars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 35,
    backgroundColor: colors.primaryColor,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
