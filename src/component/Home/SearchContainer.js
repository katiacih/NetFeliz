import React from 'react';
import { 
  Text,
  Image,
  ScrollView,
  View, 
  StyleSheet} from 'react-native';
import Search from '../../ui/Search';

class SearchContainer extends React.Component {
  render(){
    return(
      <View style= {styles.container} >
        <Search/>
      </View>
    );
  }
}
export default SearchContainer;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',

    justifyContent: 'center',
    alignItems: 'center'
  },
});