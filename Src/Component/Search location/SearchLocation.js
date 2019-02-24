import React, { Component } from 'react';
import { View, Text ,TextInput , Picker} from 'react-native';
import CitiesList from './CitiesList'
import {connect} from 'react-redux'

 class SearchLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  selectedCity(city){
      console.log(city)
  }
  render() {
      const {inputContainer , textAlign} = styles
      
    return (
      <View style={{flex:1}}>
          <View style={inputContainer}>
            <TextInput style={ textAlign } placeholder={"enter Destination"} >
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
export default  connect(mapStateToProps)(SearchLocation)

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