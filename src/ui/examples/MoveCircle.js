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

const CIRCLE_SIZE = 80;
const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;
const POSITION_X = SCREEN_WIDTH/2;
const POSITION_Y = SCREEN_HEIGHT/2;


class MoveCircle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      xTranslate: POSITION_X,
      yTranslate: POSITION_Y,
      backgroundColorObject: 'pink',
      
      
      
    };
    this._panResponder = PanResponder.create({
      
      //quando iniciado defini o panResponder
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      
      
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      
      //ocorre quando o gesto é iniciado
      onPanResponderGrant: (evt, gestureState) => {
        //chama função de destaque
        this._highlight()     
        // this.setState({ xTranslate: gestureState.dx });
        // // console.log( this.state.xTranslate )
        // this.setState({ yTranslate: gestureState.dy });
      },
      
      onPanResponderMove: (evt, gestureState) => {
        // if( gestureState.dx < )
        this.setState({ xTranslate: gestureState.moveX });
        this.setState({ yTranslate: gestureState.moveY });
      },
      
      onPanResponderEnd: (e, gestureState) => {
        //quando finaliza o movimento
        this._unHighligh();
        // console.log( this.state.xTranslate )
        // console.log( this.state.yTranslate )
      }
      
    });
    
    
  }
  componentDidMount(){
    // console.log( this.state.xTranslate )
        

  }
  // MoveCircle(){
  // }
  _highlight(){
    this.setState({ backgroundColorObject: 'blue' });
  }  
  
  _unHighligh(){
    this.setState({ backgroundColorObject: 'pink' });
    // this.stylePanResponder.style.backgroundColor ='pink'
  }
  
  render(){


    return(
      <View style = { styles.container }>

        <View 
        //setando referencia para realizar ações
        ref = {circleRef => { this.circleRef = circleRef }}
        style = {[ 
          styles.circle,
            { backgroundColor: this.state.backgroundColorObject,
              transform: [
                 {translateX: this.state.xTranslate},
                 {translateY: this.state.yTranslate}
                ],
            }
          ] }
            {...this._panResponder.panHandlers}
        >

        </View>
      </View>
    );
  }
}
export default MoveCircle;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  circle: {
    position: 'absolute',
    height:  CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    // backgroundColor: 'pink',
    borderRadius: 100,
    // borderWidth: 1,
    overflow: 'hidden',
    elevation: 10,
    // top: 0,
    // left: 0,
  }
});

