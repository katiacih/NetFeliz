import React from 'react';
import { 
  View, 
  StyleSheet } from 'react-native';
import LoadingCircles from '../ui/LoadingCircles';

TIME_MAX_ANIM = 6000


  class TabD extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        fetch: true,
      };
    }

    componentDidMount(){
      setTimeout( () => this.setState({ fetch: false }) , TIME_MAX_ANIM)
    }


    render(){
      return(
        <View style= {styles.container} >
          {this.state.fetch ? <LoadingCircles /> : null}
          
        </View>
      );
    }
  }
  export default TabD;
  
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'pink',
  },
  
});