import React, { Component } from 'react';
import  {View , ImageBackground , Text , TouchableWithoutFeedback} from 'react-native'


class SplashCntrl extends Component { 

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style = {{backgroundColor : "3e3e3e" , flex : 1}}>
                <ImageBackground style={{width:'100%' , height:'100%' , backgroundColor : 'a3a3a3'}}>
                <TouchableWithoutFeedback onPress={()=> {
                    this.props.navigation.navigate('tabBar')
                }}>
                   <Text> Hi This is Splash </Text>
                 </TouchableWithoutFeedback>
                </ImageBackground>

            </View>
        )
    }
}
export default SplashCntrl