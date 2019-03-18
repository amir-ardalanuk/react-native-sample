
import React , {Component } from 'react';
import { FlatList , Dimensions } from 'react-native';
import {connect } from 'react-redux'
import ListRow from './CouponItem'
import * as action from  '../../resRedux/Action'

class CouponList extends Component {

    componentWillMount(){
        
    }

    componentWillUnmount(){
        this.props.selectLibrary(null)

    }
    renderRow(lib){
        return <ListRow libarary={lib}  width={style.rowWidth} />
    }

    render() {
        console.log(this.props)
        return(
            
                <FlatList 
                style ={{...this.props.style}}
                data = {this.props.lib}
                renderItem = {this.renderRow}
                 numColumns={2}
                keyExtractor={(item, index) => index.toString()} >
                </FlatList>
            
        )
    }
}
const style = {
    rowWidth:{
        width:"50%",
    }
}
const mapStateToProps = state => { 
    return {lib : state.lib }
}
export default connect(mapStateToProps , action)(CouponList);