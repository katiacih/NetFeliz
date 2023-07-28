import React from 'react';
// import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Episodes from './Episodes';
import { colors } from '../../../assets/color';

const Tab = createMaterialTopTabNavigator();

function TabMovieDetail() {
  return (
    <Tab.Navigator
      initialRouteName="Episodes"
      screenOptions={{
        tabBarActiveTintColor: colors.darkTextHighEmphasis,
        tabBarInactiveTintColor: colors.darkTextDisabled,
        tabBarContentContainerStyle: {
          backgroundColor: colors.primaryColor,
        },
        tabBarLabelStyle: { fontSize: 20 },
        tabBarStyle: { backgroundColor: colors.primaryColor },
        tabBarPressColor: colors.secondaryDarkColor,
      }}
    >
      <Tab.Screen name="Episodes" component={Episodes} options={{ tabBarLabel: 'Episodes' }} />
      <Tab.Screen name="Trailers" component={Episodes} options={{ tabBarLabel: 'Trailers' }} />
    </Tab.Navigator>
  );
}

export default TabMovieDetail;
