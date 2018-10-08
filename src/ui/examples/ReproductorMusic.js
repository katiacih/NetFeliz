import React from 'react';
import { Slider,
  Text,
  Image,
  ScrollView,
  PanResponder,
  Dimensions,
  Animated,
  View, 
  StyleSheet} from 'react-native';
import {imageDataBanner} from '../../assets/dataNetflix';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../assets/color';

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;

//https://www.youtube.com/watch?v=K2rj2AjnWyQ&index=10&list=PLy9JCsy2u97k6olfalMTA_XSPz4pNuT46
//github: https://github.com/nathvarun/Apple-Music-UI-Pan-Animation-Tutorial/blob/master/App.js
class ReproductorMusic extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isScrollEnable: false
    };
  }

  componentWillMount() {

    this.scrollOffset = 0

    this.animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 90 })

    this.panResponder = PanResponder.create({

      onMoveShouldSetPanResponder: (evt, gestureState) => {

        if ((this.state.isScrollEnabled && this.scrollOffset <= 0 && gestureState.dy > 0) || !this.state.isScrollEnabled && gestureState.dy < 0) {
          return true
        } else {
          return false
        }
      },
      onPanResponderGrant: (evt, gestureState) => {
        this.animation.extractOffset()
      },
      onPanResponderMove: (evt, gestureState) => {

        this.animation.setValue({ x: 0, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.moveY > SCREEN_HEIGHT - 120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start()
        }
        else if (gestureState.moveY < 120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start()
        }
        else if (gestureState.dy < 0) {
          this.setState({ isScrollEnabled: true })

          Animated.spring(this.animation.y, {
            toValue: -SCREEN_HEIGHT + 120,
            tension: 1
          }).start()
        }
        else if (gestureState.dy > 0) {
          this.setState({ isScrollEnabled: false })
          Animated.spring(this.animation.y, {
            toValue: SCREEN_HEIGHT - 120,
            tension: 1
          }).start()
        }
      }

    })
  }



  render(){
    const animatedHeight = {
      transform: this.animation.getTranslateTransform()
    }
    const animatedImageHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [200, 32],
      extrapolate: "clamp"
    })
    const animatedSongTitleOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 90],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    })
    const animatedImageMarginLeft = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [SCREEN_WIDTH / 2 - 100, 10],
      extrapolate: "clamp"
    })
    const animatedHeaderHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [SCREEN_HEIGHT / 2, 90],
      extrapolate: "clamp"
    })
    const animatedSongDetailsOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 90],
      outputRange: [1, 0, 0],
      extrapolate: "clamp"
    })
    const animatedBackgroundColor = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: ['rgba(0,0,0,0.5)', 'white'],
      extrapolate: "clamp"
})
    return(
      <Animated.View style={ [ 
          { backgroundColor: animatedBackgroundColor },
          stylesComponent.containerAnimated_1 ] } >

        <Animated.View 
            {...this.panResponder.panHandlers} 
          style={ [ animatedHeight, 
                    stylesComponent.containerAnimated_2 ]} >

          <ScrollView
            scrollEnabled = {this.state.isScrollEnabled}
            scrollEventThrottle = {16}
            onScroll = { event => {
              this.scrollOffset = event.nativeEvent.contentOffset.y } }
          >
            <Animated.View
              style = { [{ height:animatedHeaderHeight}, 
                stylesComponent.containerAnimated_3 ] }
            >
              <View
                style = { stylesComponent.containerView_1 }
              >
                 <Animated.View
                    style = {  {height:animatedImageHeight, width: animatedImageHeight,
                      marginLeft: animatedImageMarginLeft}}    
                  >
                  <Image style = { stylesComponent.image } 
                    source = {imageDataBanner.image2}
                  />
                    
                  </Animated.View>
                  <Animated.Text style={ [stylesComponent.containerText, {
                      opacity: animatedSongTitleOpacity
                    }]}>
                      Name_Music
                  </Animated.Text>
              </View>
              {/* animated de botoes */}
              <Animated.View style = { [ {opacity: animatedSongTitleOpacity} , 
                stylesComponent.containerAnimated_5 ]}>
                <Icon
                    name= 'pause' 
                    color= {colors.secondaryLightColor}
                    size={32}/>
                <Icon
                    name= 'play' 
                    color= {colors.secondaryLightColor}
                    size={32}/>
              </Animated.View>
          </Animated.View>
        <Animated.View style = {{height: animatedHeaderHeight, opacity:animatedSongDetailsOpacity}} >
              <View style = { stylesComponent.containerView_2 }>
                <Text style={ stylesComponent.containerText_1 } > Name_Music</Text>
                <Text style={ stylesComponent.containerText_2 } > Artist - Album</Text>

              </View>
              <View style = {stylesComponent.containerView_3} >
              <Slider
                style = { {width: 300} }
                step={1}
                minimumValue = {18}
                maximumValue ={71}
                value={18}
              />

              </View>
              <View style = { {flex:2, flexDirection: 'row', 
                alignItems:'center',justifyContent: 'space-around'
                } }>
                <Icon
                name= 'backward' 
                color= {colors.primaryTextColor}
                size={32}/>
                <Icon
                name= 'pause' 
                color= {colors.primaryTextColor}
                size={32}/>
                <Icon
                name= 'fast-forward' 
                color= {colors.primaryTextColor}
                size={32}/>
              
              </View>
              <View style = { {
                flexDirection:'row',justifyContent:'space-between', 
                paddingHorizontal: 20, paddingBottom: 20
                } }>
                 <Icon
                name= 'plus' 
                color= {colors.primaryTextColor}
                size={32}/>
                <Icon
                name= 'info-circle' 
                color= {colors.primaryTextColor}
                size={32}/>
              
              </View>
        </Animated.View >
       
       <View style={{ height: 1000 }} />
        </ScrollView>

        </Animated.View>

      </Animated.View>
    );
  }

}

export default ReproductorMusic;

const stylesComponent = StyleSheet.create ({
  containerAnimated_1: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    // justifyContent: 'center'
  },
  containerAnimated_2: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'pink',
    // backgroundColor: 'lightskyblue',
    height: SCREEN_HEIGHT,
    // width: SCREEN_WIDTH
  },
  containerAnimated_3: {
    borderTopWidth: 1,
    borderTopColor: '#ebe5e5',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    // width: SCREEN_WIDTH
  },
  containerAnimated_5: {
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-around'
  },
  containerAnimated_4: {
    width: 32,
    height: 32,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // width: SCREEN_WIDTH
  },
  containerView_1: {
    // backgroundColor: 'orange',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
    // width: SCREEN_WIDTH
  },
  containerView_2: {
    // backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
    // width: SCREEN_WIDTH
  },
  containerView_3: {
    // backgroundColor: 'orange',
    height: 40,
    width: SCREEN_WIDTH,
    alignItems: 'center'
    // width: SCREEN_WIDTH
  },
  containerText: {
    // opacity: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
  containerText_1: {
    // opacity: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  containerText_2: {
    // opacity: 1,
    fontSize: 18,
    color: colors.secondaryLightColor,
  },

});