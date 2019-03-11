
import React, { Component } from 'react'
import { Text, SafeAreaView, View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, ButtonImage } from '../View'
import GiftList from './GiftList/GiftList'
import CouponItem from './../Coupon/CouponList'
import { PlusCode, Detail } from './../../Resource/icons'


export default class LotteryDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            codeInputCount: 1
        };
    }

    InputCode() {
        return (
            <View style={style.codeContainer}>

                <View style={{ height: 50, width: null, flexDirection: 'row' }}>
                    <TextInput style={style.codeInput} placeholder={"Enter your code"} />
                    <ButtonImage style={{ height: 50, width: 50 }} imageSource={PlusCode} />
                </View>
            </View>
        )
    }

    CountDownCmp() {
        console.log(style)
        const { countDownContainer, countDowner, countDownerText, infoView } = style

        return (
            <View style={countDownContainer}>
                <View style={countDowner}>
                    <Text style={countDownerText}>
                        12:12:12
                </Text>
                </View>
                <ButtonImage style={infoView} imageSource={Detail} />

            </View>
        )
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='height' > 
            
                <View style={{margin:8}}>
                    {this.CountDownCmp()}
                    {this.InputCode()}
                </View>

                <CouponItem style={{ flex: 1, margin: 8 }} />
                <GiftList style={{ width: null, position: 'absolute', bottom: 8, left: 8 }} />
            </KeyboardAvoidingView>
        );
    }
}
const style = StyleSheet.create({
    codeContainer: {
        padding: 8,
        width: null,
        height: 66,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderStyle: "dashed",
        borderWidth: 2,
        borderColor: "#001f75",
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    countDownContainer: {
        width: null,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderStyle: "dashed",
        borderWidth: 2,
        borderColor: "#001f75",
    },
    countDowner: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        fontSize: 43,
    },
    countDownerText: {
        padding: 12,
        fontSize: 43,
        color: '#002075',
    },
    infoView: {
        position: 'absolute',
        alignSelf: 'center',
        right: 12,
        width: 50,
        height: 50,
        padding: 8,
    },
    codeInput: {
        textAlign: 'center',
        flex: 1,
        borderRadius: 5,
        backgroundColor: "#e40b5f",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#001f75"
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        flex: 1,
        borderRadius: 10,
    }
}) 