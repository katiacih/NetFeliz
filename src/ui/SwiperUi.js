import React from 'react';
import {
  Image,
  Text,
  Dimensions,
  View,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import {imageDataBanner} from '../../assets/dataNetflix';

export default class SwiperUi extends React.Component{

  render(){
    return (
      <Swiper 
        showButtons = {true}
        // loop = {false}
        autoplay = {true}
      >
       <View style={styles.slideItem}>
        <Image 
          style= {styles.imageMovie} 
          resizeMode = 'cover'
          source= { imageDataBanner.image0 }
          />
      </View>
      <View style={styles.slideItem}>
        <Image 
          style= {styles.imageMovie} 
          resizeMode = 'cover'
          source= { imageDataBanner.image1 }
  
        />
      </View>
      <View style={styles.slideItem}>
        <Image 
          style= {styles.imageMovie} 
          resizeMode = 'cover'
          source= { imageDataBanner.image2 }
        />
      </View>
      <View style={styles.slideItem}>
        <Image 
          style= {styles.imageMovie} 
          resizeMode = 'cover'
          source= { imageDataBanner.image3 }
        />
      </View>


      </Swiper>
    );
  }

}

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideItem:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  imageMovie: {
    width: Dimensions.get('screen').width,
    backgroundColor: 'transparent',
  }
  
});
