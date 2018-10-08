import React from 'react';
import { Animated,
        StyleSheet,
        View, 
        TextInput,
        Image,
        Dimensions,
        Easing,
      TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../assets/color';
import LoadingCircles from './LoadingCircles';
import SearchPresentation from '../component/Home/SearchPresentation';



class Search extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      text: '',
      widthTextInput: new Animated.Value(0),
      scaleValue: new Animated.Value(0),
      showSearch: false,
      fetchStatus: false,
      fadeAnim: new Animated.Value(1),
    };
    // this.handleProp = this.handleProp.bind( this );

    // handleProp = ( newVal ) => {
    //   this.setState({ someProp: newVal });
    // }
  }
  _onPressCheckStart = () => {
      //chamar função que vai aparecer lista
      // return( <SearchPresentation/>
      console.log(this.state.text)
  }
  _onrenderCheck = () => {

    
    return (

      <Icon
        name= 'check' 
        color= {colors.primaryTextColor}
        size={25}/>
    );
  }
  
  _onActiveAnimation = () => {
    Animated.parallel( [
      Animated.timing(
        this.state.fadeAnim, {
          toValue:0, // seta para 0 opacity
          duration: 300,
        }
        ),
        Animated.timing(
          this.state.widthTextInput, {
            toValue:1,
            duration: 500,
          }
        )]
      ).start()
          
    }
        
  _onDeActiveAnimation = () => {
    //quando falso, não aparece text input
    Animated.parallel( [
      Animated.timing(
        
        this.state.fadeAnim, {
          toValue:1, // seta para 1 opacity, aparece
          duration: 300,
        }
        ),
        Animated.timing(
          this.state.widthTextInput, {
            toValue: 0,
            duration: 500,
          }
          )]
          ).start()
        }
              
  _onPressButtonSearch = () => {
    
    // console.log(this.state.showSearch)
    // console.log(this.state.fetchStatus)
    if( this.state.showSearch === true ){
      //significa que check esta ativo e nao deve animar
      this.setState( state => ({ fetchStatus: true}) )
      this._onPressCheckStart()
      
    }else{
      this.setState( state => ({ showSearch: true }) )
      // ativar animação
      this._onActiveAnimation()
    }
  }
              
  _onPressCloseButtonSearch = () => {
    //limpa text input - > se cleartext ==  true
    //chama animação de recolher text input
    this.setState( state => ({ text: ''}) )
    this.setState( state => ({ fetchStatus: false}) )
    this.setState( state => ({ showSearch: false }) )
    this._onDeActiveAnimation()
    
  }
  
  render() {
    const fadeStatus = this.state.fadeAnim.interpolate({
      inputRange: [0,1],
      outputRange: [1,0],
      extrapolate: 'clamp'
    })
    const animated_width = this.state.widthTextInput.interpolate({
      inputRange: [0 , 0.5, 0.75, 1],
      outputRange: [ '-100%', '0%', '-10%', '0%' ]
    })
                
    return (
      
      <View style={ styles.container }>       
        <Animated.View 
          style = { 
            {
              flex: 1,
              right: animated_width
            }
          } >
          <Animated.View style={ [styles.containerTextInput, 
                { opacity: fadeStatus }, ]
                } >
            <TextInput
              style = { styles.textInput }
              onChangeText = { (text) => this.setState({text}) }
              clearTextOnFocus = {true}
              value = {this.state.text}
              editable = { this.state.showSearch }
              placeholder = 'Movies, Series ...'
              placeholderTextColor = {colors.primaryTextColor}
              underlineColorAndroid = 'transparent'
              selectionColor = {colors.secondaryDarkColor}
              />
              {/* botao de fechar search */}
              <TouchableOpacity 
                style={  styles.buttonCloseSearchContainer }
                onPress={ this._onPressCloseButtonSearch } >
                    <Icon
                    name= 'times-circle' 
                    color= {colors.secondaryColor}
                    size={25}/>
                </TouchableOpacity>
          </Animated.View>


        </Animated.View>
        <TouchableOpacity 
          style={  styles.buttonBar }
          onPress={ this._onPressButtonSearch 
          }>
          {        
         
            ( this.state.showSearch ? 
               //true 
               //showSearch true = aparece check
               this._onrenderCheck()
               
               :  //showSearch == false
                (this.state.fetchStatus ? 
                  // fetchStatus = true
                  <SearchPresentation 
                    // screenProps={ 
                    //   { 
                    //   info: this.state.title,
                    //   callback: this.handleProp   
                    //   } }
                      
                      />
                  //nesse caso fetch nao tem mudanças ainda
                  // null
                  : 
                  ///false entao renderiza lupa
                  <Icon
                  name= 'search'
                  color= {colors.primaryTextColor}
                  size={25}/>           
                  
                )
              )

            }

        </TouchableOpacity>
      </View>            
    );
  }
}


export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerTextInput: {
    flexDirection: 'row',
    backgroundColor: colors.primaryLightColor,
    paddingHorizontal: 10, 
    alignItems: 'center',
  },
  textInput: {
    color: colors.primaryTextColor,
    flex:9,
    height: 46,
  },
  buttonBar: {
    padding: 10,
    backgroundColor: colors.primaryDarkColor,
  },
  buttonCloseSearchContainer: {
    padding: 10,
    backgroundColor: colors.primaryLightColor,
  },
});
