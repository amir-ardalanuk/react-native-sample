import React , {Component} from 'react'
import { View , Text , TouchableWithoutFeedback }  from 'react-native'

class HomeCntrl extends Component { 
  
    static navigationOptions = {
        headerTitle: "List",
        
      };

      constructor(props){
          super(props)
          this.navigateToList = this.navigateToList.bind(this);
          this.state = { navTitle: 'Home' };
      }

      navigateToList(item){
        this.props.navigation.navigate("List" , {name : item})
    }
    render(){
        const { navigation} = this.props
        console.log(this.state)
        return (
            <View>
                <TouchableWithoutFeedback onPress = { () => this.navigateToList("Hi")}>
                <Text>Home</Text>
                </TouchableWithoutFeedback>
                

            </View>
        )
    }
}

export default HomeCntrl;