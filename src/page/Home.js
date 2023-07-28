import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import SwiperUi from '../ui/SwiperUi';
import { colors } from '../../assets/color';
import ListMedias from '../component/Home/ListMedias';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <SwiperUi />
        <ScrollView>
          <Text style={styles.textTitle}>Popular on Netfeliz</Text>
          <ListMedias navigation={navigation} />
          <Text style={styles.textTitle}>Top Picks For You</Text>
          <ListMedias navigation={navigation} />
          <Text style={styles.textTitle}>Continued Watching</Text>
          <ListMedias navigation={navigation} />
          <Text style={styles.textTitle}>My List</Text>
          <ListMedias navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDarkColor,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.primaryTextColor,
  },
});
