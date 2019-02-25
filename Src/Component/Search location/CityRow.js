import React , {Component} from 'React'
import { View , Text , StyleSheet , TouchableWithoutFeedback , LayoutAnimation , ImageBackground} from 'react-native';
import {connect } from 'react-redux'
import * as actions from '../../resRedux/Action/index'



class CityRow extends Component { 

 
    constructor(props){
        super(props)
        this.selected = this.selected.bind(this)
        this.onRowClicked = this.props.onRowClicked.bind(this)
    }

    selected(city) {
       // this.props.selectProv(city)
         this.onRowClicked(city)
    }

    renderView(){
        const { selectedLibId , city } = this.props
        const {  container} = style;
        var styles = [container]
        
        if (selectedLibId === city.province_id) { 
            styles.push({backgroundColor:'#44e3e3e3'}) 
        }

        return styles
           
    }

    render(){
        const { textTitle , textDesc} = style;
        const { province_name ,  province_id } = this.props.city
        return(
            <ImageBackground source = {{
                uri: ""
              }}  style={{flex :1 , flexDirection: 'column'}}> 
                <TouchableWithoutFeedback style ={{flex :1 , flexDirection: 'row' , justifyContext:'center' }} onPress={ () =>
                    this.selected( this.props.city)
                }>
             
                 <View style ={ this.renderView() } >
                    <Text style={textTitle}>
                        {province_name}
                    </Text>
                    
                    <Text style={textDesc}>
                     {""}
                    </Text>

                </View>
                
            </TouchableWithoutFeedback>

            </ImageBackground>
           
            
        )
    }
}

const style = {
    textTitle :{
        fontSize : 18,
        color:'#000',
        padding:16,
        textAlign : 'right',
       
    },
    textDesc :{
        fontSize : 16,
        color:'#000',
        textAlign : 'right',
    },
    container :{
        flex: 1,
        justifyContent : 'center' ,
        alignItems: 'flex-end',
        padding: 16,
        width : null ,
        height:66,
        
    }
}

const mapStateToProps =  state => { 
    return {selectedLibId : state.selectLibrary}
}

export default  connect(mapStateToProps , actions)(CityRow);
//export default CityRow;