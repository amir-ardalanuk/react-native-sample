import React , {Component} from 'React'
import { View , Text , StyleSheet , TouchableWithoutFeedback , LayoutAnimation , ImageBackground} from 'react-native';
import {connect } from 'react-redux'
import * as actions from '../../resRedux/Action/index'



class LotteryRow extends Component { 

 
    constructor(props){
        super(props)
        this.selected = this.selected.bind(this)
    }

    selected(id) {
        this.props.selectLibrary(id)
    }

    isSelectedView(){
        const { selectedLibId , libarary } = this.props
        const {  container} = style;
        var styles = [container]
        
        if (selectedLibId === libarary.item.id) { 
            styles.push({backgroundColor:'#44e3e3e3'}) 
        }
        console.log(styles)
        return styles
           
    }

    render(){
        const { textTitle , textDesc , gift , giftText} = style;
        const { libarary } = this.props
        console.log(this.props);
        return(
            <ImageBackground source = {{
                uri: libarary.item.picture
              }}  style={{flex :1 , flexDirection: 'column'}}> 
                <TouchableWithoutFeedback style ={{flex :1 , flexDirection: 'row' , justifyContext:'center' }} onPress={ () =>
                    this.selected(libarary.item.id)
                }>
             
                 <View style ={ this.isSelectedView() } >
                    <Text style={textTitle}>
                        {libarary.item.title}
                    </Text>
                    
                    <Text style={textDesc}>
                     {libarary.item.desc}
                    </Text>

                    <View style={gift}>
                    <Text >
                        "Catch your Gift"
                    </Text>

                    </View>

                </View>
                
            </TouchableWithoutFeedback>

            </ImageBackground>
           
            
        )
    }
}

const style = {
    textTitle :{
        fontSize : 22,
        color:'#000',
        padding:12,
        textAlign : 'center',
       
    },
    textDesc :{
        fontSize : 16,
        color:'#000',
        padding:12,
        textAlign : 'center',
    },
    container :{
        flex: 1,
        justifyContent : 'center' ,
        alignItems: 'center',
        padding: 16,
        aspectRatio:1
        
    },
    gift: {
        justifyContent: 'center',
        backgroundColor:"rgb(73,121,246)",
        borderRadius: 12,
        padding:12,
    },giftText: {
        color: 'white',
        fontSize : 16,
        flex: 1,
        
    }
}

const mapStateToProps =  state => { 
    return {selectedLibId : state.selectLibrary}
}

export default  connect(mapStateToProps , actions)(LotteryRow);
//export default LotteryRow;