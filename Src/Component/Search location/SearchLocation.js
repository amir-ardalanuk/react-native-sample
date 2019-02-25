import React, { Component } from 'react';
import { View, Text ,TextInput , Picker} from 'react-native';
import CitiesList from './CitiesList'
import {connect} from 'react-redux'
import * as action from './../../resRedux/Action'

 class SearchLocation extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title :  navigation.getParam('title' , 'Select From Location'),
        }
      }
        
    
  constructor(props) {
    super(props);
    this.filterLocations = this.filterLocations.bind(this)
    const {param} = this.props.navigation.state
    this.selectCallback = this.props.navigation.state.params.selected.bind(this)
    this.state = {
    };
  }

  filterLocations(text){
      this.props.filterProv(text)
      console.log({text})
  }
  selectedCity(city){
      this.selectCallback(city)
      this.props.navigation.pop()
  }
  render() {
      const {inputContainer , textAlign} = styles
    return (
      <View style={{flex:1}}>
        
          <View style={inputContainer}>
        
            <TextInput onChangeText={ (text) => 
                this.filterLocations(text)
            } 
            style={ textAlign } placeholder={"enter Destination"} >
            </TextInput>
          </View>
          <CitiesList itemSelected = {this.selectedCity.bind(this)}/>
        
      </View>
    );
  }
}
const mapStateToProps = state => { 
    return {}
}
export default  connect(mapStateToProps ,action )(SearchLocation)

const styles =  {
    inputContainer: {
        margin: 15,
        padding: 10,
        alignItems: 'flex-end',
        borderColor: 'gray',
        borderWidth: 0.5,
        flexDirection: 'row',
        width:null , 
        flexDirection: 'column',
        height:55,
        backgroundColor:'white',
        justifyContent: 'center',
    } , 
    textAlign:{
        textAlign:'right' , 
        flex: 0.6,
        fontSize: 26,
        justifyContent: 'center',
    },
    Picker:{
        textAlign:'right' , 
        flex: 0.4,
    }
 
}