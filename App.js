import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { 
  SafeAreaView,
  DrawerItems,
  createStackNavigator, 
  createDrawerNavigator } from 'react-navigation';
import ListMedia from './src/component/Home/ListMedia';
import Home from './src/component/Home/Home';
import SearchContainer from './src/component/Home/SearchContainer';
import ScrollableContainer from './src/component/Home/ScrollableContainer';
import Header from './src/ui/Header';
import DrawerContainer from './src/ui/DrawerContainer';
import { colors } from './assets/color';
import DetailsMovie from './src/component/Detail/DetailsMovie';


export default class App extends React.Component {
  constructor( props ){
    super( props );
    this.state = { 
      someProp: 'LUL'
    };
    this.handleProp = this.handleProp.bind( this );
  }

  handleProp = ( newVal ) => {
    this.setState({ someProp: newVal });
  }

  render() {
    return (

        <View style={{flex:1}}>

           {/* <MyDrawer 
             screenProps={
               { 
               info: this.state.someProp,
                callback: this.handleProp   
               }
             }/> */}
             <DetailsMovie />
        </View>

  );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {screen: Home},
    ListMedia: { screen: ListMedia },
    DetailsMovie: { screen: DetailsMovie }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation, screenProps }) => ({
        headerStyle: {
          backgroundColor: colors.primaryDarkColor,
        },
        headerTintColor: colors.secondaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerMode: 'float',
        headerTitle: <Header 
          info={ screenProps.info }
          burgerMenuCallback={navigation.toggleDrawer} />,
        headerTransitionPreset: 'uikit',
      }
    ),
  },
);

const CustomDrawerContent = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContainer />
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </View>
  )
};

const MyDrawer =  createDrawerNavigator(
  {   
    // DrawerContainer: { screen: DrawerContainer},
    Home: RootStack,
    SearchContainer: { screen: SearchContainer,
            navigationOptions: ( {navigation} ) => ({
              headerStyle: {
                backgroundColor: colors.primaryDarkColor,
              },
              headerTintColor: colors.secondaryColor,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerMode: 'card',
              headerTitle: <Header burgerMenuCallback={navigation.toggleDrawer} />,
            }),
          },
    ScrollableContainer: {screen: ScrollableContainer},
  },
  {
    contentComponent: CustomDrawerContent,
    drawerBackgroundColor: colors.primaryDarkColor,
    contentOptions: {
      activeTintColor: colors.primaryTextColor,
      inactiveTintColor: colors.primaryTextColor,
      
      activeBackgroundColor: colors.primaryLightColor,
      inactiveBackgroundColor: colors.primaryColor,
    },            
  }
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


