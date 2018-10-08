import React from 'react';
import { Dimensions,
  Text,
  Image,
  View, 
  TouchableOpacity,
  StyleSheet} from 'react-native';
import { thunbnail } from '../../../assets/dataNetflix';
import Icon from 'react-native-vector-icons/FontAwesome';;
import { colors } from '../../../assets/color';

const SIZE_WIDTH = Dimensions.get('window').width;
const SIZE_HEIGHT = 270;


  class ReproductorContainer extends React.Component {

    render(){

      return(

        <View>
          <View style= {styles.container_VideoReproductor}> 
            <Image 
              style = {{
                height: '100%',
                width: SIZE_WIDTH,
                zIndex: 0, // flex:1
              }}
              resizeMode = 'cover'
              source = { thunbnail.image0 }
              />   
        </View>
         <View style = {styles.container_FantasmaVideoReproductor}>
          <View style = {{ alignItems: 'center' }}>
            <TouchableOpacity
            style = { styles.buttonPlay }
            onPress = { f => f }> 
              <Icon
              name= 'play-circle'
              color= { colors.primaryTextColor}
              size={80}/>
          </TouchableOpacity>
        </View>
            <Text style= {{ 
              color:'white',
              fontSize: 25,
              fontWeight:'bold',
              fontFamily: 'sans-serif'
            }}>{this.props.name}</Text>
      </View>
    </View>
      );0
    }
  }
export default ReproductorContainer;
  
const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:'white',
  },
  container_VideoReproductor: {
    // flex:4,
    height: SIZE_HEIGHT ,
    backgroundColor: 'pink',
    borderBottomWidth: 10,
    // alignItems: 'center',
    justifyContent:'center', 
    zIndex: 0, 
    // borderColor:colors.primaryLightColor,
  },
  container_FantasmaVideoReproductor: {
    // flex:4,
    height: SIZE_HEIGHT ,
    backgroundColor: 'transparent',
    width: SIZE_WIDTH,
    position: 'absolute',
    zIndex: 2,
    padding: 15,
    justifyContent:'space-around',  
  },
  buttonPlay: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.75,
    backgroundColor: 'transparent',
    zIndex:3,
    marginTop:60 ,
    padding: 10,
    elevation: 2,
  },

  
});