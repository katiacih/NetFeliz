import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { colors } from '../../../assets/color';
import { episodesTab, movies_1 } from '../../../assets/dataNetflix';

const SIZE_WIDTH =  Dimensions.get('window').width;

class TabDetails extends React.Component {

  constructor(props){
    super(props);
  }
  _renderItem (item, resume) {
    return(

      <View style= { styles.containerEpisodes }>
        <View style= { styles.episodes }>
          <View style = {{ 
            backgroundColor: 'transparent',
            height: 130}}>

            <Image 
              style = { styles.image }
              source = { episodesTab.ep1 }
              resizeMode = 'center'
            />
          </View>

          <View style = {{ flex: 1, paddingLeft: 8 }}>

            <Text
             style={{color: colors.darkTextHighEmphasis}}>1. Episode</Text>

            <Text>{resume}</Text>
          </View>
        </View>
      </View>

      );
    }

  render(){
    const resume = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
    return(
      <View style= { styles.container } >
        { this._renderItem(1,resume) }
        { this._renderItem(1,resume) }
        { this._renderItem(1,resume) }
        { this._renderItem(1,resume) }
        { this._renderItem(1,resume) }
  
      </View>
    );
  }
}

class VideosTab extends React.Component {

  constructor(props){
    super(props);
  }

  _newKey(key){
    return key + '';
  } 

  _renderItem (item, resume) {
    return(

      <View style= { styles.containerEpisodes }>
        <View style= { styles.episodes }>
          <View style = {{ 
            backgroundColor:  'transparent',
            height: 130}}>

            <Image 
              style = { styles.image }
              source = { episodesTab.ep1 }
              resizeMode = 'center'
            />
          </View>

          <View style = {{ flex: 1, paddingLeft: 8 }}>

            <Text
             style={{color: colors.darkTextHighEmphasis}}>1. Episode</Text>

            <Text>{resume}</Text>
          </View>
        </View>
      </View>

      );
    }

  render(){
    const moviesList = movies_1.map( (movie,index) => {
      return {...movie, key: this._newKey(index)}
        } );
    const resume = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit." 

    return(
      <View style= { styles.container } >
        { this._renderItem(1,resume) }
        { this._renderItem(1,resume) }
        { this._renderItem(1,resume) }
        { this._renderItem(1,resume) }
        { this._renderItem(1,resume) }
  
      </View>
    );
  }
}

export default createMaterialTopTabNavigator(
  {
  Episodes: VideosTab,
  Trailers: TabDetails
  },
  {
    tabBarOptions: {
    activeTintColor: colors.darkTextHighEmphasis,
    inactiveTintColor: colors.darkTextDisabled,
    style: {
      backgroundColor: colors.primaryColor,
    }, 
    inactiveBackgroundColor: colors.primaryColor,
    labelStyle: {fontSize: 20,},
    pressColor: colors.secondaryDarkColor,    
    }
  }
  

)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  text: {
    fontSize: 20,

  },
  containerEpisodes: {
    height: 130,
    width: SIZE_WIDTH,
    backgroundColor: colors.primaryColor,
    padding: 8
  },
  episodes: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: 130,
    width: 160,
  },
});