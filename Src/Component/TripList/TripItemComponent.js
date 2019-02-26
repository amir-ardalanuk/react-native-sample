import React, { Component } from 'React'
import { View, Text, StyleSheet, TouchableWithoutFeedback, LayoutAnimation, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import CircularImage from './../View/CircularImage'
import * as actions from '../../resRedux/Action/index'


PROFILE_IMAGE_SIZE = 65
class TripRowComponent extends Component {


    constructor(props) {
        super(props)
        this.selected = this.selected.bind(this)
    }

    selected(id) {
        this.props.selectLibrary(id)
    }

    renderView() {
        const { selectedLibId, trip } = this.props
        const { container } = style;
        var styles = [container]

        if (selectedLibId === trip.item.id) {
            styles.push({ backgroundColor: '#44e3e3e3' })
        }
        console.log(styles)
        return styles

    }

    render() {
        const { textTitle, textDesc , card } = style;
        const { trip } = this.props
        console.log(this.props);
        return (
            <View style={{...card, flex: 1, margin: 10, }}>
                <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() =>
                    this.selected(trip.item.id)
                }>

                    <View>
                        {/* Top View's Style */}
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
                        {/* Seprator */}
                        <View style={{ backgroundColor: '#e3e3e3', height: 1, width: null, marginTop: 8, marginBottom: 8 }} ></View>
                        {/* Top View's Style */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{ ...textTitle, alignSelf: 'center' }}>
                                {trip.item.tripHour + ":" + trip.item.tripMin}
                            </Text>
                            <Text style={{ ...textTitle, alignSelf: 'center' }}>
                                {trip.item.price}
                            </Text>
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


                        </View>



                    </View>

                </TouchableWithoutFeedback>

            </View>


        )
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

const mapStateToProps = state => {
    return { selectedLibId: state.selectLibrary }
}

export default connect(mapStateToProps, actions)(TripRowComponent);
//export default TripRowComponent;