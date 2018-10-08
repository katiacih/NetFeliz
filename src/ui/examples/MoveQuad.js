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

const QUAD_SIZE = 80;
const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;


class MoveQuad extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isTouch: false,
      previousLeft: 0,
      previousTop: 0,
      
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      
      //ocorre quando o gesto é iniciado
      onPanResponderGrant: (evt, gestureState) => {
        //chama função de destaque
        this._highlight()
        
      },
      onPanResponderMove: (e, gestureState) => {
        // A distância de movimento mais recente é gestureState.move {X, Y}
        
        // A distância do gesto acumulado desde que se tornou respondedor
        // gestureState.d {x, y}
        if(this.state.previousTop + gestureState.dy > 0 &&
          this.state.previousTop + gestureState.dy < SCREEN_HEIGHT )
          {


            this._quadStyles.style.left = this.state.previousLeft + gestureState.dx;
            this._quadStyles.style.top = this.state.previousTop + gestureState.dy;
            this._updateNativeStyles();
          }
      },
      
      onPanResponderEnd: (e, gestureState) => {
        //quando finaliza o movumento
        this._unHighligh();
        this.previousLeft += gestureState.dx;
        this.previousTop += gestureState.dy;
      }
      
    })
  }
  
  componentDidMount(){
    this._updateNativeStyles();
  }
  
  componentWillMount(){
    
    this._quadStyles = {
      style: {
        left: this.previousLeft,
        top: this.previousTop,
        backgroundColor: 'pink',
      },
    };
  }
  
  _updateNativeStyles(){
    this.quad && this.quad.setNativeProps(this._quadStyles)
  }
  _highlight(){
    this._quadStyles.style.backgroundColor = 'purple';
    this._updateNativeStyles();
  }
  _unHighligh(){
    this._quadStyles.style.backgroundColor = 'pink';
    this._updateNativeStyles();
  }
  
  
  
  render(){
    // quad: (null:  ?{ setNativeProps ( props: Object ) : void } ),
    return(
      <View style = { styles.container }>

        <View 
        ref = {quad => { this.quad = quad }}
        style = { styles.quad }
        {...this._panResponder.panHandlers }>

        </View>
      </View>
    );
  }
}
export default MoveQuad;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quad: {
    position: 'absolute',
    height: QUAD_SIZE,
    width: QUAD_SIZE,
    backgroundColor: 'pink',
    borderRadius: 30,
    borderWidth: 1,
    overflow: 'hidden',
    elevation: 10,
    top: 0,
    left: 0,
  }
});

