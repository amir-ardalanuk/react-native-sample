
import React , {Component } from 'react';
import { FlatList } from 'react-native';
import {connect } from 'react-redux'
import GiftRow from './GiftListItem'
import * as action from  './../../../resRedux/Action'

class GiftList extends Component { 

    componentWillMount(){
    }

    componentWillUnmount(){
        this.props.selectLibrary(null)
    }
    renderRow(lib){
        return <GiftRow libarary={lib}  />
    }

    render() {
        console.log(this.props)
        return(
            
                <FlatList 
                horizontal
                style ={{...this.props.style,}}
                data = {this.props.lib}
                renderItem = {this.renderRow}
                keyExtractor={(item, index) => index.toString()} >
                </FlatList>
            
        )
    }
}

const mapStateToProps = state => { 
    return {lib : state.lib }
}
export default connect(mapStateToProps , action)(GiftList);