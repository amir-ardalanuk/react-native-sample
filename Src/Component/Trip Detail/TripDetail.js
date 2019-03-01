import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

export default class componentName extends Component {
    constructor(props) {
        super(props);
        const { textTitle, textDesc , card } = style;
        this.state = {
        };
    }

    renderTripInfo() {
        return (
            <View>
                <Text> Trip info </Text>
                <Text> trip Date / trip time </Text>
                <Text> trip Waite Time </Text>
            </View>
        )
    }

    renderTripLocation() {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', }}>

                        <Text style={textTitle}>
                            {trip.item.fromName}
                        </Text>
                        <Text style={textTitle}>
                            {trip.item.toName}
                        </Text>
                    </View>
                    <View style={{ backgroundColor: 'blue', height: null, width: 1, marginTop: 8, marginBottom: 8 }} ></View>
                </View>
                <Text style={textTitle}>
                    Distance and Duration
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', }}>
                        <Text style={textTitle}>
                            From Name
                                    </Text>
                        <Text style={textTitle}>
                            To Name
                                    </Text>
                    </View>
                    <View style={{ backgroundColor: 'blue', height: null, width: 1, marginTop: 8, marginBottom: 8 }} ></View>
                </View>
            </View>
        )
    }

    renderTripPriceAndPlace(){
        return(
            <View style={{flexDirection:'column'  }}>
                <Text>
                    Empy seat 
                </Text>
                <Text>
                    any  seat  is exp Price
                </Text>
            </View>
        )
    }
        

    renderTripDriver() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} >
                <View></View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
                    <Text style={textTitle}>
                        {trip.item.driverName + " " + trip.item.driverFamily}
                    </Text>
                    <Text style={textDesc}>
                        {trip.item.driverCarModel + " " + trip.item.driverCarColor}
                    </Text>
                </View>
                <CircularImage size={PROFILE_IMAGE_SIZE} sourceLink={require('./../../Resource/imgPRo.jpg')} />

            </View>
        )
    }
    
    divider(){
        return  <View style={{ backgroundColor: '#e3e3e3', height: 1, width: null, marginTop: 8, marginBottom: 8 }} ></View>
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                {this.renderTripInfo()}
                {this.divider()}
                {this.renderTripLocation()}
                {this.divider()}
                {this.renderTripPriceAndPlace()}
                {this.divider()}
                {this.renderTripDriver()}
            </View>
        );
    }
}
const style = {
    card : {
        shadowColor: 'black',
        shadowOffset: {width: 1,height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        margin: 10,
        padding:8,
        backgroundColor:'white',
        borderRadius: 8,
    },
    textTitle: {
        fontSize: 18,
        color: '#000',
        padding: 8,
        textAlign: 'right',

    },
    textDesc: {
        fontSize: 12,
        color: '#000',
        textAlign: 'right',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        aspectRatio: 1

    }
}
