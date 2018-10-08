import React from 'react';
import {
  View,
  Animated,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
}from 'react-native';

import { colors } from '../../../assets/color';
import { logotipo } from '../../../assets/dataNetflix';

HEADER_MAX_HEIGHT = 120;
// HEADER_MIN_HEIGHT = 20;
HEADER_MIN_HEIGHT = 70;
HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;
PROFILE_SCROLL_DISTANCE = PROFILE_IMAGE_MAX_HEIGHT - PROFILE_IMAGE_MIN_HEIGHT;
PROFILE_MARGIN_TOP = HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2);

export default class ScrollableHeaderAnimation extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }


  render(){
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    const ProfileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, PROFILE_SCROLL_DISTANCE],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    const ProfileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [PROFILE_MARGIN_TOP, HEADER_MAX_HEIGHT + 5],
      extrapolate: 'clamp'
    })
    const HeaderZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
    const HeaderTitleBottom = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE, 
        HEADER_SCROLL_DISTANCE + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_SCROLL_DISTANCE + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26],
      outputRange: [-20,-20,-20, 0],
      extrapolate: 'clamp'
    })



    return (
      <View style = {{flex:1}}>

        <Animated.View 
          style = {{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'lightskyblue',
            height: headerHeight,
            zIndex: HeaderZindex,
            alignItems: 'center' }
          }>
          <Animated.View 
            style = {{
              position: 'absolute',
              bottom: HeaderTitleBottom,
            }}>
            <Text style= {[styles.text , {color: 'white'}] }>
              Dominique Sans
            </Text>
          </Animated.View>

        </Animated.View>
        <ScrollView style= { styles.scrollView }
          scrollEventThrottle = {16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
        >
          <Animated.View
            style = { [styles.buttonAvatar,
                      {
                        height: ProfileImageHeight,
                        width: ProfileImageHeight, 
                        marginTop: ProfileImageMarginTop
                      } ] }
            onPress={f => f }>
              <Image 
              style= {styles.avatar} 
              source= { logotipo.avatar }  
            /> 
          </Animated.View>

            <View>
              <Text style = { styles.text}>Dominique Sans</Text>
            </View>
          <View style={{width: '100%', height: 1000}}>

          </View>

        </ScrollView>

              
      </View>
    );
  }
}

const styles = StyleSheet.create({ 

  scrollView: {
    flex: 1,
  },
  buttonAvatar: {
    borderRadius: PROFILE_IMAGE_MAX_HEIGHT /2,
    borderWidth: 3,
    overflow: 'hidden',
    marginLeft: 10,
    borderColor: colors.primaryTextColor,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    flex:1,
    height: PROFILE_IMAGE_MAX_HEIGHT  + 70,
    width: PROFILE_IMAGE_MAX_HEIGHT  + 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10
  }
});

