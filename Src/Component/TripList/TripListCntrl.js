
import React , {Component } from 'react';
import { FlatList } from 'react-native';
import {connect } from 'react-redux'
import TripRow from './TripItemComponent'
import * as action from  '../../resRedux/Action/index'

class TripListComponent extends Component { 

    componentWillMount(){
    }

    componentWillUnmount(){
        this.props.selectLibrary(null)
    }
    renderRow(lib){
        return <TripRow trip={lib}  />
    }

    render() {
        console.log(this.props)
        return(
            
                <FlatList 
                style ={{flex : 1, backgroundColor:'#e3e3e3'}}
                data = {this.props.lib}
                renderItem = {this.renderRow}
                keyExtractor={(item, index) => index.toString()} >
                </FlatList>
            
        )
    }
}

const mapStateToProps = state => { 
    console.log('trip' , state)
    return {lib : state.userTrips }
}
export default connect(mapStateToProps , action)(TripListComponent);