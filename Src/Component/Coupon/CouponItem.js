import React , {Component} from 'React'
import { View , Text , StyleSheet , TouchableWithoutFeedback , LayoutAnimation , ImageBackground} from 'react-native';
import {connect } from 'react-redux'
import * as actions from '../../resRedux/Action/index'



class CouponItem extends Component {


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
        const { textTitle} = style;
        const { libarary } = this.props
        console.log(this.props);
        return(
            <View style={style.couponContainer}>
                <TouchableWithoutFeedback style ={{flex :1 , justifyContext:'center',alignItems:'center' }} onPress={ () =>
                    this.selected(libarary.item.id)
                }>

                 <View style ={{ justifyContent:'center' ,
                     alignItems: "center",flex:1}} >
                    <Text style={textTitle}>
                        {libarary.item.title}
                    </Text>

                </View>

            </TouchableWithoutFeedback>

            </View>


        )
    }
}

const style = StyleSheet.create({
    couponContainer : {
        height: 41.9,
        width: 90,
        margin: 1,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        
        flexDirection: 'column',
        borderColor:'red',
        borderStyle:'dotted',
        borderWidth:1.5,
    },
    textTitle :{
        fontSize : 15,
        color:'#000',
        textAlign : 'center',
    },
   
    container :{
        flex: 1,
        justifyContent : 'center' ,
        alignItems: 'center',
        padding: 16,
        aspectRatio:1

    },
    
})

const mapStateToProps =  state => {
    return {selectedLibId : state.selectLibrary}
}

export default  connect(mapStateToProps , actions)(CouponItem);
//export default CouponItem;