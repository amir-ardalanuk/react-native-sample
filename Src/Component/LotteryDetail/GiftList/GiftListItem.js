import React, { Component } from 'React'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, LayoutAnimation, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../../../resRedux/Action/'
import { Gift } from './../../../Resource/icons/'


class GiftListItem extends Component {


    constructor(props) {
        super(props)
        this.selected = this.selected.bind(this)
    }

    selected(id) {
        this.props.selectLibrary(id)
    }

    renderView() {
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
        const { textTitle, textDesc, footer, giftView, dash } = style;
        const { libarary } = this.props
        console.log(this.props);
        return (
            <View style={giftView}>
                <TouchableWithoutFeedback style={{ flex: 1, flexDirection: 'row', justifyContext: 'center' }} onPress={() =>
                    this.selected(libarary.item.id)
                }>

                    <View style={this.renderView()} >

                        <Image source={Gift} style={style.giftImage} />

                        <Text style={textTitle}>
                            {libarary.item.title}
                        </Text>

                        <Text style={textDesc}>
                            {libarary.item.desc}
                        </Text>

                        <View style={dash} />

                        <View style={footer}>
                            <Text >
                                {libarary.item.desc}
                            </Text>
                        </View>

                    </View>

                </TouchableWithoutFeedback>

            </View>
        )
    }
}

const style = StyleSheet.create({
    giftView: { flex: 1, margin: 8, flexDirection: 'column', overflow: 'hidden', borderRadius: 10, borderWidth: 1, borderColor: 'blue', },
    textTitle: {
        fontSize: 18,
        color: '#000',
        paddingTop: 16,
        paddingBottom: 0,
        paddingLeft: 8,
        paddingRight: 8,
        textAlign: 'center',

    },
    dash: {
        position: 'absolute',
        bottom: 31,
        backgroundColor: 'black',
        right: 0, left: 0,
        height: 1,

        borderTopWidth: 2,
        borderColor: "#ffffff",

        alignSelf: 'stretch',
    },
    giftImage: {
        width: 33.4,
        height: 34,
        resizeMode: 'contain'
    },
    textDesc: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginBottom: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    footer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        width: null,
        height: 30.8,
        backgroundColor: "#e40b5f",
        justifyContent:'center',
        alignItems:'center'
    },
    footerTextState: {
        flex: 1,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    }
})

const mapStateToProps = state => {
    return { selectedLibId: state.selectLibrary }
}

export default connect(mapStateToProps, actions)(GiftListItem);
//export default GiftListItem;