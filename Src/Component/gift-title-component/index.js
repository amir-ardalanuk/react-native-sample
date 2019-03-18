import React, { Component } from 'react';
import { Text,Image, View } from 'react-native'
import {_GiftsImage} from '@icons'

class GiftTitleComponent extends Component {
    render() {
        return (
             <View style={{justifyContent:'center',alignSelf:'center',alignItems:'center' , flexDirection:'row', borderRadius:16 , borderWidth:1,borderColor:'white' , padding:8}} >
                   
                   <Text style={{color:'white'}}> Gift's </Text>
                   <Image source={_GiftsImage} style={{  width:24,height: 24 , resizeMode:'center'}} />
               </View>
        );
    }
}

export default GiftTitleComponent;