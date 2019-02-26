import  React from 'react';
import { Image , View ,StyleSheet} from 'react-native';


export default CircularImageComponent = ({size , sourceLink})=> {
    return(
        <View style={{
            height:size,
            width : size,
            borderRadius :size/2,
            overflow: 'hidden',
        }}>
        <Image source={sourceLink} style={{flex:1 , width:null, height : null}}/>
        </View>
    )
}
