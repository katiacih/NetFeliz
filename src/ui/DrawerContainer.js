import React from 'react'
import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../assets/color';

export default class DrawerContainer extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style= {styles.containerCard} >
          <TouchableOpacity
            style = { styles.buttonAvatar}
            onPress={f => f }>
            <Icon
              name= 'user'
              color='black'
              size={50}/>  

              </TouchableOpacity>
          <Text style = { styles.textUserNAme }>UserName</Text>
        </View>

        <View style= {styles.containerOptionView} >
          <Text style = { styles.textOptions }>Downloads</Text>
          <TouchableOpacity 
            style = { styles.buttonView}
            onPress={f => f } >
            <Icon
              name= 'chevron-right'
              color='white'
              size={15}/>  
            </TouchableOpacity>
        </View>
        <View style= {styles.containerOptionView} >
          <Text style = { styles.textOptions }>My List</Text>
          <TouchableOpacity 
            style = { styles.buttonView}
            onPress={f => f } >
            <Icon
              name= 'chevron-right'
              color='white'
              size={15}/>  
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    // height: 100,
    // width: 300,
  },
  containerCard: {
    height: '60%',
    width: '100%',
    backgroundColor: colors.primaryDarkColor,
    // borderRadius: 10,
    padding: 5,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerAvatar: {
    height: 30,
    width: 30,
    borderRadius: 100,
    elevation: 10,
  },
  buttonAvatar: {
    alignItems: 'center',
    backgroundColor: colors.secondaryColor,
    padding: 10,
    borderRadius: 100,
    height: 120,
    width: 120,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingRight: 20,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUserNAme: {
    color: colors.secondaryTextColor,
    fontWeight: 'bold',
  },
  textOptions: {
    color: colors.primaryTextColor,
    paddingLeft: 20, 
    fontWeight: 'bold',
  },
  containerOptionView: {
    width: '100%',
    height: '10%',
    // backgroundColor:'pink',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})

