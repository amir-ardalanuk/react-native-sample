import React , {Component} from 'React'
import { View , Text , StyleSheet , TouchableWithoutFeedback , LayoutAnimation , ImageBackground} from 'react-native';
import {connect } from 'react-redux'
import * as actions from '../../resRedux/Action/index'



class ListRow extends Component { 

 
    constructor(props){
        super(props)
        this.selected = this.selected.bind(this)
    }

    selected(id) {
        this.props.selectLibrary(id)
    }

    renderView(){
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
        const { textTitle , textDesc} = style;
        const { libarary } = this.props
        console.log(this.props);
        return(
            <ImageBackground source = {{
                uri: libarary.item.picture
              }}  style={{flex :1 , flexDirection: 'column'}}> 
                <TouchableWithoutFeedback style ={{flex :1 , flexDirection: 'row' , justifyContext:'center' }} onPress={ () =>
                    this.selected(libarary.item.id)
                }>
             
                 <View style ={ this.renderView() } >
                    <Text style={textTitle}>
                        {libarary.item.title}
                    </Text>
                    
                    <Text style={textDesc}>
                     {libarary.item.desc}
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
        textAlign : 'center',
       
    },
    textDesc :{
        fontSize : 16,
        color:'#000',
        textAlign : 'center',
    },
    container :{
        flex: 1,
        justifyContent : 'center' ,
        alignItems: 'center',
        padding: 16,
        aspectRatio:1
        
    }
}

const mapStateToProps =  state => { 
    return {selectedLibId : state.selectLibrary}
}

export default  connect(mapStateToProps , actions)(ListRow);
//export default ListRow;