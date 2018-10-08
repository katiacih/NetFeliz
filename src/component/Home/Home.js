import React from 'react';
import { 
  Text,
  ScrollView,
  View, 
  StyleSheet} from 'react-native';
import ListMedia  from './ListMedia';
import SwiperUi from '../../ui/SwiperUi';
import { colors } from '../../../assets/color';
import PropTypes from 'prop-types';
import SearchContainer from './SearchContainer';
import SearchPresentation from './SearchPresentation';


export default class Home extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {
      showListSearch: false,
      
    };
  }

  _navigation_To_Details = (item) => {
    this.props.navigation.navigate( 'DetailsMovie',{
      key: item,
    } )
  }



  render(){
    return(
      <View style={styles.container}>
        { this.state.showListSearch ? 
          < SearchPresentation/>
        : 
        
            <View>
              <SwiperUi />      
              <ScrollView>
                {/* <Text style={ styles.textTitle }>My List</Text> */}
                <Text style={ styles.textTitle }>{this.props.screenProps.info}</Text>
                <ListMedia handleClick = { this._navigation_To_Details }/>
                <Text style={ styles.textTitle }>Top Picks For You</Text>
                <ListMedia/> 
                <Text style={ styles.textTitle }>Continued Watching</Text>
                <ListMedia/> 

              </ScrollView>  

            </View>
        }
      </View>
    );
  }


}

Home.propTypes = {
  showListSearch: PropTypes.bool
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.primaryDarkColor,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.primaryTextColor
  },
});