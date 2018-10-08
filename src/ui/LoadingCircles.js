import React from 'react';
import { Animated,
        StyleSheet,
        View, 
        Dimensions,
        LayoutAnimation,
      TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../assets/color';

MAX_SIZE_CIRCLE = 100
SIZE_CIRCLE = 15
COLOR_CIRCLE = 'red'


class LoadingCircles extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anim1: new Animated.Value(1),
      anim2: new Animated.Value(1),
      anim3: new Animated.Value(1),
    };
  }

 

  _onInitAnimation = () => {

    Animated.loop(

      Animated.sequence([
  
        Animated.timing(
          
          this.state.anim1, {
            toValue: 0, 
            duration: 300,
          }
        ),
        Animated.timing(
          
          this.state.anim2, {
            toValue: 0, 
            duration: 300,
          }
        ),
        Animated.timing(
          
          this.state.anim3, {
            toValue: 0, 
            duration: 300,
          }
        ),
        
      ])

    ).start();

    // ]).start();
  }

  componentDidMount(){
    this._onInitAnimation();
  }


  render(){

    const {widthAnim, heightAnim} = this.state;

    const animCirclefadeOut1 = this.state.anim1.interpolate({
      inputRange: [0 , 1  ],
      outputRange: [ 0.25, 1 ]
    })
    const animCirclefadeOut2 = this.state.anim2.interpolate({
      inputRange: [0 ,1 ],
      outputRange: [ 0.25, 1 ]
    })
    const animCirclefadeOut3 = this.state.anim3.interpolate({
      inputRange: [0 ,1 ],
      outputRange: [ 0.25, 1 ]
    })


    return(
      <View style= {styles.container} >
       <Animated.View style={ [ styles.circles, {
          opacity: animCirclefadeOut1,
          backgroundColor: COLOR_CIRCLE,
          height: SIZE_CIRCLE,
          width: SIZE_CIRCLE,
       }]}>
        
        </Animated.View>
       <Animated.View style={ [ styles.circles, {
          opacity: animCirclefadeOut2,
          backgroundColor: COLOR_CIRCLE,
          height: SIZE_CIRCLE,
          width: SIZE_CIRCLE,

          // height: animCircleWidth,
          // width: animCircleWidth,
       }]}>
        
        </Animated.View>
       <Animated.View style={ [ styles.circles, {
          opacity: animCirclefadeOut3,
          backgroundColor: COLOR_CIRCLE,
          height: SIZE_CIRCLE,
          width: SIZE_CIRCLE,


       }]}>
        
        </Animated.View>
 
       
      </View>
    );
  }
}
export default LoadingCircles;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    zIndex: 1,
    padding: 20,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, .25)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 150,
    paddingRight: 150,
  },
  circles: {
    borderRadius: 100,
    
    // flexDirection: 'row',
    borderWidth: 1,
    overflow: 'hidden',
    marginLeft: 10,
    borderColor: colors.primaryTextColor,
    elevation: 5,
  },

});