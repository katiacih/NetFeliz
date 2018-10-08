import React from 'react';
import { 
  Text,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
  View, 
  StyleSheet} from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';

  class FadeInView extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        fadeAnim: new Animated.Value(0), // opacity 0
      };
    }
    effectFadeAnim(){
      Animated.timing(
        this.state.fadeAnim, // The value to drive
        {
          toValue: 1, // Target
          duration: 2000, // Configuration
        },
      ).start();
    }
  
    componentDidMount(){
      this.effectFadeAnim();
    }
  
    render(){
      return(
          <Animated.View // Special animatable View
            style={{
              opacity: this.state.fadeAnim, // Binds
            }}>    
            <View style = { styles.buttonItems }></View>
          </Animated.View>
  
  
      );
    }
  
  }

  class FloatingButtonSimple extends React.Component {
    
    constructor(props){
      super(props);
      this.state ={
        showItem: false,
      };
    }
    render(){
      return(
        <View style= {styles.container}>

          <View style= {styles.containerButton} >
            <TouchableOpacity
              style = { styles.button }
              onPress={() => {
                this.setState(state => ({showItem: !state.showItem}));
              }}>
            </TouchableOpacity>
          </View>
          {this.state.showItem && (
            <FadeInView>
              <View style={styles.buttonItems}>
                <Text style = {{ color:'black' }}>FadeInView</Text>
              </View>
              <View style={styles.buttonItems}>
                <Text style = {{ color:'black' }}>FadeInView</Text>
              </View>
              <View style={styles.buttonItems}>
                <Text style = {{ color:'black' }}>FadeInView</Text>
              </View>
            </FadeInView>
            
          )}

        </View>

      );
    }
  }
  export default FloatingButtonSimple;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
  },
  containerButton: {
    backgroundColor:'green',
    borderRadius: 100,
    height: 150,
    width: 150,
    elevation: 10,
  },
  button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderRadius: 100,
      height: 150,
      width: 150,
      elevation: 10,
  },
  buttonItems: {
      alignItems: 'center',
      backgroundColor: 'red',
      borderRadius: 100,
      height: 50,
      width: 50,
      elevation: 10,
  }

  
});
  