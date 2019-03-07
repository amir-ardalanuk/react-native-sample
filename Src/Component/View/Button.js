import React, { Component } from 'react'
import { Text, View,TouchableHighlight } from 'react-native'


export default Button = ({text,style}) => {
    return (
       
            <TouchableHighlight style = {style} >
                <View style={_style.button}>
                    <Text style={{padding:15,flex:1,textAlign:'center'}}>
                        {text}
                    </Text>
                </View>
            </TouchableHighlight>
    )
}  
const _style = {
    button: {
    justifyContent:'center',
    alignItems:'center',
    flex:1 , 

}
}