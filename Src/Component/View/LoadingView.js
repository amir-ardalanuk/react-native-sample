import  React from 'react';
import { ActivityIndicator , View ,StyleSheet} from 'react-native';


export default LoadingView = ()=> {
    return(
        <View >
            <ActivityIndicator 
            animating = {true}
            color = '#bc2b78'
            size = "large"
            style = {styles.activityIndicator}
            />
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 70
    },
    activityIndicator: {
       padding :  12
    }
 })