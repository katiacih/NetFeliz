import React from 'react';
import { 
        StyleSheet,
        View, 
        Text,
        Dimensions,
        Image,
      TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { logotipo } from '../../assets/dataNetflix';
import { colors } from '../../assets/color';
import Search from './Search';

class Header extends React.Component {

  constructor(props){
    super(props);
  }


  _onPressButtonDrawerOpen(){
    // return this.props.navigation.openDrawer();
    // return this.props.navigation.toggleDrawer();
  }
  _onPressButtonSearch(){
    return null;
  }
  render() {
    return (
      //usar touchable
      <View style={ styles.container }>
         {/* Home */}
        <TouchableOpacity 
          style={ styles.buttonBar }
          onPress={this.props.burgerMenuCallback}>
        
          <Icon
            name= 'bars'
            color= { colors.primaryTextColor }
            size={25}/>   
        
        </TouchableOpacity>
        <View style= {styles.containerImageLogo}>

          <Image 
            style= {styles.imageLogo} 
            source= { logotipo.image_logo }
            />
        </View>


        <Search />
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  buttonBar: {
    padding: 10,
    zIndex: 1,
  },
  imageLogo: {
    // right: '40%',
    height: 100,
    width: 100
  },
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  containerImageLogo: {
    position:'absolute',
    zIndex: 0,
    flex:1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});
