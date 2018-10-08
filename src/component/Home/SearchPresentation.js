import React from 'react';
import { Animated,
        StyleSheet,
        View, 
        FlatList,
        Image,
        TouchableHighlight,
        Easing,
      TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../assets/color';
import { movies_1 } from '../../../assets/dataNetflix';

class SearchPresentation extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { 
      text: '\Th'
    };
    
  }

  _newKey(key){
    return key + '';
  } 

  _onPress(item){
    //console.log(item.name);
    return null;
  }
  
  _renderItem (item) {
    return(
      // <Text style= {styles.textTitle} >{item.name}  </Text>
      <Image style= {styles.imageMovie} 
        //source= {{uri: item.image}}
        resizeMode = 'stretch'
        source= { item.image }
        // source= { require(  )}
        
        />
      );
    }

  render(){
    // const ListFilter =  movies_1.map( (movie) => {
    //   return { ... movie.name === 'Th' }

    // } )

    const moviesList = movies_1.map( (movie,index) => {
      return {...movie, key: this._newKey(index)}
        } );
    const nameMovies = moviesList.map( (movie) => {
      return movie.name
    } )
    //para usar com REgex e isMAtch
    const pattern = this.state.text.concat("*")
    const filterMovies = nameMovies.filter( (name) => {
      return name.includes(this.state.text)
    }  )
    const filterMoviesList = moviesList.filter( (movie) => {
      return movie.name.includes(this.state.text)
    }  )

    return(

      <View style ={ styles.container }>
          
          {/* <ListMedia/> */
          // movie = ...moviesList
           console.log( filterMoviesList)
          }
        <FlatList 
          renderItem = { ({item}) => (
            <TouchableHighlight
            style={ styles.touchStyle }
            onPress = { () => this._onPress(item) } >
            {this._renderItem(item)}
            </TouchableHighlight>
          )}
          // data = { moviesList }
          data = { filterMoviesList }
          horizontal = {true}
          ItemSeparatorComponent= {() => (
            <View style={styles.separator} />
          )}
        />
      </View>
    );
  }

}


export default SearchPresentation;

const styles = StyleSheet.create({
  container: {   
    backgroundColor: 'transparent',
    // opacity: 0.75,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  touchStyle: {
    height: 160,
    width: 140,
    alignItems: 'center'
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
