import React, { Component } from 'React'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, LayoutAnimation, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../../resRedux/Action/index'
import {_deleteImg} from './../../Resource/icons'



class CouponItem extends Component {


    constructor(props) {
        super(props)
        this.selected = this.selected.bind(this)
    }

    selected(id) {
        this.props.selectLibrary(id)
    }

    isSelectedView() {
        const { selectedLibId, libarary } = this.props
        const { container } = style;
        var styles = [container]

        if (selectedLibId === libarary.item.id) {
            styles.push({ backgroundColor: '#44e3e3e3' })
        }
        console.log(styles)
        return styles

    }

    render() {
        const { textTitle } = style;
        const { libarary, width } = this.props
        console.log(this.props);
        return (
            <View style={{...width,padding:8}}>
                <View style={[style.couponContainer,{flexDirection: 'row',alignItems:'center'}]}>
                    <TouchableWithoutFeedback style={{ flex: 1, justifyContext: 'center', alignItems: 'center' }} onPress={() =>
                        this.selected(libarary.item.id)
                    }>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: "center", flex: 1
                        }} >
                            <Text style={textTitle}>
                                {libarary.item.title}
                            </Text>
                        </View>

                    </TouchableWithoutFeedback>
                    <Image source={_deleteImg} style={{width: 26,height: 26 , resizeMode:'center'}} />
                </View>
            </View>



        )
    }
}

const style = StyleSheet.create({
    couponContainer: {
        backgroundColor:"white",
        width: null,
        padding: 8,
        height: 41.9,
        borderRadius: 5,
        borderStyle: "dashed",
        borderWidth: 0.5,
        borderColor: "#a7a7a7"
    },
    textTitle: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        aspectRatio: 1

    },

})

const mapStateToProps = state => {
    return { selectedLibId: state.selectLibrary }
}

export default connect(mapStateToProps, actions)(CouponItem);
//export default CouponItem;