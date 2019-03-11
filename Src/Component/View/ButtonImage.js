import React, { Component } from 'react'
import { Image, View,TouchableHighlight } from 'react-native'


export default ButtonImage = ({style , onPress , imageSource}) => {
    return (
       
            <TouchableHighlight style = {style} onPress={onPress}  >
                <View style={_style.button}>
                    <Image style={{padding:15,flex:1,resizeMode: 'contain'}} source={imageSource} >
                    </Image>
                </View>
            </TouchableHighlight>
    )
}  
const _style = {
    button: {
    justifyContent:'center',
    alignItems:'center',
    flex:1 ,
        padding: 4,

}
}