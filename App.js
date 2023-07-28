import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/page/Home';
import Details from './src/page/Details';
import Episodes from './src/component/Detail/Episodes';
import Logo from './src/component/Menu/Logo';
import BtnMenu from './src/component/Menu/BtnMenu';
import Header from './src/component/Menu/Header';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation, route }) => ({
            header: () => <Header navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{ key: -1 }}
          options={({ navigation, route }) => ({
            header: () => <Header hideSearch={true} navigation={navigation} />,
          })}
        />
        <Stack.Screen name="Episodes" component={Episodes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
