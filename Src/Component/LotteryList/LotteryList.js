
import React , {Component } from 'react';
import { FlatList } from 'react-native';
import {connect } from 'react-redux'
import ListRow from './LotteryRow'
import * as action from  '../../resRedux/Action/index'

class LotteryList extends Component { 

    componentWillMount(){
    }

    componentWillUnmount(){
        this.props.selectLibrary(null)
    }
    renderRow(lib){
        return <ListRow libarary={lib}  />
    }

    render() {
        console.log(this.props)
        return(
            
                <FlatList 
                style ={{flex : 1}}
                data = {this.props.lib}
                renderItem = {this.renderRow}
                // numColumns={2}
                keyExtractor={(item, index) => index.toString()} >
                </FlatList>
            
        )
    }
}

const mapStateToProps = state => { 
    return {lib : state.lib }
}
export default connect(mapStateToProps , action)(LotteryList);