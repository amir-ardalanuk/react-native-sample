import React, { Component } from 'react'
import { Text, View , TouchableHighlight , Dimensions} from 'react-native'


export default class Dashboard extends Component {

    constructor(props){
        super(props)
        this.onFromClicked = this.onFromClicked.bind(this)
        this.onToClicked = this.onToClicked.bind(this)
        this.fromSelected = this.fromSelected.bind(this)
        this.toSelected = this.toSelected.bind(this)
        this.state = {
            fromSelected : null ,
            toSelected : null
        }
    }

    toSelected(prov){
        this.setState({toSelected:prov})
    }

    fromSelected(prov){
        this.setState({fromSelected:prov})
    }

    onFromClicked(){
        this.props.navigation.navigate('SearchLocation',{title:'Select From ' ,selected : this.fromSelected })
    }

    onToClicked(){
        this.props.navigation.navigate('SearchLocation',{title:'Select Destination ',selected : this.toSelected})
    }
  render() {
      const {card , main , text} = styles
      var { width} = Dimensions.get('window');
    return (

      <View style={main}>
        <View>
            <TouchableHighlight style={{...card ,height:60 , width:width - 10 , backgroundColor:'blue'}}onPress={()=>{
                this.onFromClicked()
            }}>
                <Text style={{...text ,alignSelf: 'flex-end',padding: 12,}}  >
                {this.state.fromSelected == null ? 'From' :this.state.fromSelected.province_name }
                 </Text>
            </TouchableHighlight> 
            <TouchableHighlight style={{...card ,height:60 , width:width - 10 , backgroundColor:'blue'}}onPress={()=>{
                this.onToClicked()
            }}>
                <Text style={{...text ,alignSelf: 'flex-end',padding: 12,}} >
                {this.state.toSelected == null ? 'to' :this.state.toSelected.province_name }
                 </Text>
            </TouchableHighlight>    
        </View>
            
          <View style={{flexDirection:'row'}}>
          
            <TouchableHighlight style={card}>
                <Text style={text} > Passenger </Text>
            </TouchableHighlight>    
            <TouchableHighlight style={card}>
                <Text style={text}  >Driver</Text>
            </TouchableHighlight>
          </View>

          <View style={{flex:1}} ></View>
      </View>
    )
  }
}
const styles = { 
    text : {
        color:'white',
    },
    card : {
        shadowColor: 'black',
        shadowOffset: {width: 1,height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        width:120,
        height:80,
        backgroundColor:'red',
        margin: 10,
        borderRadius: 8,
        justifyContent:'center',
        alignItems: 'center',
    },
    main:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex:1,
    },
}