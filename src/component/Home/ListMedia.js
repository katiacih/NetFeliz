import React from 'react';
import { 
  Text,
  Image,
  View, 
  StyleSheet, 
  FlatList,
  TouchableHighlight } from 'react-native';
import { movies_1 } from '../../../assets/dataNetflix';
import DetailsMovie from '../Detail/DetailsMovie';


class ListMedia extends React.PureComponent{


  _newKey(key){
    return key + '';
  } 
  _onPress(item){
    //console.log(item.name);
    return null;
  }
 
    
    
    render(){
      
      const moviesList = movies_1.map( (movie,index) => {
        return {...movie, key: this._newKey(index)}
          } );
    return(
      <View style = {styles.container}>
        
        {/* { console.log(Object.keys(this.props)) } */}
        <FlatList 
          renderItem = { ({item}) => (
            <TouchableHighlight
            onPress = { () => 
              this.props.handleClick(item.key)
              }>
            {this._renderItem(item)}
            </TouchableHighlight>
          )}
          // data = { moviesList }
          data = { moviesList }
          horizontal = {true}
          ItemSeparatorComponent= {() => (
            <View style={styles.separator} />
          )}
        />
        
      </View>

    );
  }
}

export default ListMedia;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red'
  },
  imageMovie: {
    height: 150,
    width: 120,
  },
  separator:{
    width: 5,
    marginTop: 5
  }
});
