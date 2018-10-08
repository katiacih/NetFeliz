import React from 'react';
import { 
  Text,
  Image,
  ScrollView,
  View, 
  StyleSheet} from 'react-native';
import ScrollableHeaderAnimation from '../../ui/examples/ScrollableHeaderAnimation';


  class TabB extends React.Component {
    render(){
      return(
        <View style= {styles.container} >
          <ScrollableHeaderAnimation/>
        </View>
      );
    }
  }
  export default TabB;
  
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
  },
  
});