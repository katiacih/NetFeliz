import React from 'react';
import { StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { details_Movie, thunbnail } from '../../../assets/dataNetflix';
import { colors } from '../../../assets/color';

import ReproductorContainer from './ReproductorContainer';
import TabDetails from './TabDetails';

const SIZE_WIDTH = Dimensions.get('window').width;
const SIZE_HEIGHT = Dimensions.get('screen').height;


class DetailsMovie extends React.Component{

  constructor(props){
    super(props);
    const movieInfo = details_Movie.filter( (movie) => {
      // return movie.key === keyItem = navigation.getParam('key', '0');;
      return movie.key === 0;
    } )[0]
    this.state={
      ...movieInfo,
      activeTab: 0
    }
  };

  static navigationOptions = {
    headerLeft: null
  }
  
  _updateData( key ){
    let data = details_Movie.filter( (movie) => {
      return movie.key === key;
    })
    return data;
  }
  
  componentWillUpdate(){
    
  }
  
  componentDidMount() {
    setTimeout( this.testCB, 5000 );
  }
  
  _render_Classificator_Stars( number_stars ){
    // const { creator } = this.props.movieInfo
    return(
      <View style = {{
        flexDirection: 'row',
      }}>
      
        <Icon
            name= 'star'
            color= { colors.secondaryColor }
            size={20}/>
        <Icon
            name= 'star'
            color= { colors.secondaryColor }
            size={20}/>
        <Icon
            name= 'star'
            color= { colors.secondaryColor }
            size={20}/>
        <Icon
            name= 'star'
            color= { colors.secondaryColor }
            size={20}/>
        <Icon
            name= 'star'
            color= { colors.secondaryColor }
            size={20}/>

      </View>
    );
  }

  testCB = () => {
    this.setState({ activeTab: 1 })
  }
  
  render(){
    
    const { navigation } = this.props;
    //const keyItem = navigation.getParam('key', '0');
    
    return(
      <View style= {styles.container_0}> 

      <ScrollView style= {{ backgroundColor: 'pink'}}>

        <ReproductorContainer  name={this.state.name} />
        <View style= {styles.container_classificator}> 
          { this._render_Classificator_Stars() }
            <Text style= {{ 
              color:'white',
              fontSize: 15,
              fontWeight:'bold'
            }}>{this.state.year}</Text>
            <Text style= {{ 
              color:'white',
              fontSize: 15,
              fontWeight:'bold' 
              
            }}>{this.state.classificatorAge}</Text>
            <Text style= {{ 
              color:'white',
              fontSize: 15,
              fontWeight:'bold'
            }}>{this.state.season} Season</Text>     
        </View>
         <View style= {styles.container_Text}> 

            <Text style= {{ 
              color:'white',
              fontSize: 20,
              fontWeight:'bold'
            }}>{this.state.atractText}</Text>
            <Text style= {{ color:'white',
                paddingTop: 10,
                fontSize: 15}}>{this.state.sinopse}</Text>
            <Text style= {{ color:'white',
                paddingTop: 15,
                fontSize: 15,
                fontWeight:'bold'}}>Cast: {this.state.cast}</Text>
            <Text style= {{ color:'white',
                
                fontSize: 15,
                fontWeight:'bold' }}>Creator: {this.state.creator}</Text>
         </View>
          <View style= {styles.container_buttons}> 

            <TouchableOpacity
              style = { styles.touchStyle }
              onPress = { f => f }
              
              > 
              <Icon
              name= 'check'
              color= { colors.primaryTextColor}
              size={25}/>
              <Text style= {{ color:'white',
                fontSize: 15,
                fontWeight:'bold' }}>My List</Text>


            </TouchableOpacity>

              <TouchableOpacity
              style = { styles.touchStyle }
              onPress = { f => f }> 
              <Icon
              name= 'share-alt'
              color= { colors.primaryTextColor}
              size={25}/>
              <Text style= {{ color:'white',
                fontSize: 15,
                fontWeight:'bold' }}>Share</Text>


            </TouchableOpacity>
            
            
          </View>

          <View style={{ 
            height: SIZE_HEIGHT
             
            }} >
            <TabDetails nav = {this.props.navigation}/>
          </View>
          
          
      </ScrollView>


      </View>
  );
  
  }
}

export default DetailsMovie;

const styles = StyleSheet.create({
  container_0:{
    flex:1,
  },
  container_Text: {
    height:180 ,
    paddingLeft: 15,
    backgroundColor: colors.primaryColor,
  },
  container_classificator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',  
    height: 35,
    backgroundColor:colors.primaryColor,
  },
  container_buttons: {
    height:70 ,
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',  
  },
  touchStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.75,
    backgroundColor: 'transparent',
    margin: 15,
    padding: 10,
    elevation: 2,
  },
  
});