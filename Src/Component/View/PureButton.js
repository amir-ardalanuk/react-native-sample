import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback , Animated } from 'react-native'

export default class Button extends Component {
    handelPressIn(){
        Animated.spring(this.animatedValue,{
            toValue:.5,
        }).start()
    }

    handelPressOut(){
        Animated.spring(this.animatedValue,{
            toValue:1,
            friction:3,
            tension:40,
        }).start()
    }

    componentWillMount(){
        this.animatedValue = new Animated.Value(1);
    }

    constructor(props){
        super(props)
        this.handelPressIn = this.handelPressIn.bind(this); 
        this.handelPressOut = this.handelPressOut.bind(this);
    }
  render() {
      const { text, style, onPress,children } = this.props
      const animatedStyle = {transform:[{scale:this.animatedValue}]}
    return (
        <TouchableWithoutFeedback 
        
        onPress={onPress} 
        onPressIn={this.handelPressIn} 
        onPressOut={this.handelPressOut} >
        <Animated.View style={[_style.button , animatedStyle,style]}>
              {children}
        </Animated.View>
    </TouchableWithoutFeedback>
    )
  }
}
// export default Button = ({ text, style, onPress,children }) => {
//     return (

//         <TouchableHighlight style={style} onPress={onPress}  >
//             {/* <View style={_style.button}>
//                 {children}
//             </View> */}
//               {children}
//         </TouchableHighlight>
//     )
// }
const _style = {
    button: {
        justifyContent: 'center',
        alignItems: 'center',

    }
}