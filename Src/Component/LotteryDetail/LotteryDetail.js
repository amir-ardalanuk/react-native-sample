
import React, { Component } from 'react'
import { Text, Image, SafeAreaView, View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { CountDown, ButtonImage } from '../View'
import GiftList from './GiftList/GiftList'
import CouponItem from './../Coupon/CouponList'
import { PlusCode, Detail, _ShareImg, _GiftsImage } from '@icons'
import LottieView from 'lottie-react-native';
import Theme from './../../Theme'
import GiftTitleComponent from '@components/gift-title-component'

export default class LotteryDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Lottery Detail',
            headerStyle: {
                backgroundColor: Theme.headerColor,
                borderBottomColor: Theme.headerColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (
                <ButtonImage
                    onPress={() => alert('This is a button!')}
                    imageSource={_ShareImg}
                />
            ),
        }

    };



    constructor(props) {
        super(props);

        this.state = {
            codeInputCount: 1
        };
    }

    InputCode() {
        return (
            <View style={style.codeContainer}>

                <View style={{ height: 50, width: null, marginBottom: 12, marginTop: 10, flexDirection: 'row' }}>
                    <TextInput style={style.codeInput} placeholder={"Enter your code"} />
                    <ButtonImage style={{ height: 50, width: 50 }} imageSource={PlusCode} />
                </View>

                <CouponItem style={{ height: 200 }} />
            </View>
        )
    }

    renderState(title, subTitle) {
        return (
            <View style={style.stateView}>
                <Text>{title}</Text><Text>{subTitle}</Text>
            </View>
        )
    }

    CountDownCmp() {
        console.log(style)
        const { stateContainer } = style
        return (
            <View style={style.countDownContainer}>
                <CountDown style={{ borderWidth: 0 }} imageSource={Detail} />
                <View style={stateContainer}>
                    {this.renderState("progress : ", "1")}
                    {this.renderState("Win : ", "1")}
                    {this.renderState("Loss : ", "1")}
                </View>
            </View>

        )
    }

    render() {
        console.log(this.props)
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-end', "backgroundColor": this.props.screenProps.theme.backgroundColor }} behavior='height' >
                <LottieView style={[style.backgroundAnimation]}
                    source={require('./../../Resource/bg.json')}
                    autoPlay
                    loop
                />
                <View style={{ maring: 16, padding: 12, justifyContent: 'center' }}>
                    {this.CountDownCmp()}
                    {this.InputCode()}

                </View>

                {/* { width: null, position: 'absolute', bottom: 8, left: 8 } */}
                <GiftTitleComponent />
                <GiftList style={{ flexGrow: 0, height: 150 }} />
            </SafeAreaView>
        );
    }
}
const style = StyleSheet.create({
    backgroundAnimation: { position: 'absolute', bottom: 0, top: 0, right: 0, left: 0, width: '100%', height: '100%', },
    countDownContainer: {
        marginLeft: 1,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderStyle: "dashed",
        borderWidth: 2,
        borderColor: "#001f75",
        flexDirection: 'column', backgroundColor: 'white'
    },
    codeContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.95);",
        padding: 10,
        width: "100%",
        borderRadius: 10,
        borderStyle: "dashed",
        borderWidth: 2,
        borderColor: "#001f75",
        justifyContent: 'center',
        alignItems: 'center'
    },
    codeInput: {
        textAlign: 'center',
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#a7a7a7"
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        flex: 1,
        borderRadius: 10,
    },
    stateContainer: {
        height: 50,
        width: null,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    stateView: { flex: 1 / 3.5, padding: 8, backgroundColor: 'rgb(224,254,254)', borderRadius: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
}) 