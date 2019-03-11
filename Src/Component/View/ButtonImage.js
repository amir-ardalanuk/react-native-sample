import React, { Component } from 'react'
import { Text, View,TouchableHighlight } from 'react-native'


export default Button = ({text,style , onPress}) => {
    return (
       
            <TouchableHighlight style = {style} onPress={onPress}  >
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