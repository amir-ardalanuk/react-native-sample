import React , {Component} from 'react'
import { View , Text , ScrollView , Image , Animated }  from 'react-native'

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_SIZE_MAX = 80
PROFILE_IMAGE_SIZE_MIN = 40

class ProfileCntrl extends Component { 
    static navigationOptions = {
        headerTitle: "Profile",
        
      };

      constructor(props){
          super(props)
          this.state = {
              scrollY : new Animated.Value(0)
          }
      }

    render(){
        const headerHeight = this.state.scrollY.interpolate({
            inputRange:[0 , HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT] , 
            outputRange : [HEADER_MAX_HEIGHT , HEADER_MIN_HEIGHT] , 
            extrapolate:'clamp'
        })

        const imageProfileSize = this.state.scrollY.interpolate({
            inputRange:[0 , HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT] , 
            outputRange : [ PROFILE_IMAGE_SIZE_MAX, PROFILE_IMAGE_SIZE_MIN],
            extrapolate:'clamp'
        })

        const imageProfileTopMargin = this.state.scrollY.interpolate({
            inputRange:[0 , HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT] , 
            outputRange : [ HEADER_MAX_HEIGHT - (PROFILE_IMAGE_SIZE_MAX / 2), HEADER_MAX_HEIGHT + 5],
            extrapolate:'clamp'
        })

        const headerZIndex = this.state.scrollY.interpolate({
            inputRange:[0 , HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT] , 
            outputRange : [ 0 , 1],
            extrapolate:'clamp'
        })

        return (
            <View style={{flex: 1,}}>
                <Animated.View style={{
                    position: 'absolute',
                    top: 0,
                    left:0,
                    right:0,
                    backgroundColor:'lightskyblue',
                    height:headerHeight,
                    zIndex: headerZIndex,

                }}>

                </Animated.View>
                <ScrollView style={{flex:1}} 
                scrollEventThrottle={16}
                onScroll= { Animated.event(
                    [ { nativeEvent:{ contentOffset:{ y : this.state.scrollY} } } ]
                    )

                }
                 >
                    <Animated.View style={{
                        height:imageProfileSize,
                        width : imageProfileSize,
                        borderRadius: PROFILE_IMAGE_SIZE_MAX / 2,
                        borderWidth: 1,
                        left:15,
                        marginTop:imageProfileTopMargin,
                        borderColor: 'white',
                        overflow: 'hidden',
                    }}>
                    <Image source={require('../../Resource/imgPRo.jpg')} style={{width: null,height: null ,flex:1}} />
                    </Animated.View>
                    <View><Text style={{fontWeight: 'bold',fontSize: 26,}}>Amir Ardalani</Text></View>
                </ScrollView>
                
                <Text>Profile</Text>
            </View>
        )
    }
}

export default ProfileCntrl;