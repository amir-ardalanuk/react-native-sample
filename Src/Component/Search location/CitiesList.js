
import React , {Component } from 'react';
import { FlatList } from 'react-native';
import {connect } from 'react-redux'
import CityRow from './CityRow'
import * as action from  '../../resRedux/Action/index'

class CitiesList extends Component { 

    constructor(props){
        super(props)
        this.itemSelected = this.props.itemSelected.bind(this)
        this.renderRow = this.renderRow.bind(this)
    }
    componentWillMount(){
    }

    componentWillUnmount(){
        this.props.selectLibrary(null)
    }
    renderRow(lib){
        
       // const { itemSelected } = this.props
       // debugger
       console.log(this.props)
        return <CityRow city={lib.item} onRowClicked={this.itemSelected} />
    }

    render() {
        return(
            
                <FlatList 
                style ={{flex : 1}}
                data = {this.props.lib}
                renderItem = {this.renderRow}
                numColumns={1}
                keyExtractor={(item, index) => index.toString()} >
                </FlatList>
            
        )
    }
}

const mapStateToProps = state => { 
    return {lib : state.provinceList }
}
export default connect(mapStateToProps , action)(CitiesList);