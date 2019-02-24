import React, { Component } from 'react'
import { Text, View , TouchableHighlight } from 'react-native'


export default class Dashboard extends Component {
  render() {
      const {card , main , text} = styles
    return (

      <View style={main}>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight style={card}>
                <Text style={text} > Add </Text>
            </TouchableHighlight>    
            <TouchableHighlight style={card}>
                <Text style={text}  >Search</Text>
            </TouchableHighlight>
          </View>
      </View>
    )
  }
}
const styles = { 
    text : {
        color:'white',
    },
    card : {
        shadowColor: 'black',
        shadowOffset: {width: 1,height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        width:80,
        height:80,
        backgroundColor:'red',
        margin: 10,
        borderRadius: 8,
        justifyContent:'center',
        alignItems: 'center',
    },
    main:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
}