import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../resRedux/Action'
import { Loading, PureButton } from '../View'
import { primaryColor } from '../../Theme'
import { BgPatterImage,  } from './../../Resource/icons'

class Authenticate extends Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.tick = this.tick.bind(this)
        this.state = {
            username: '',
            password: '',
            loading: false,
            timerSeconds : 10,
            sec : '00',
            min:'00',
        }
    }

    componentDidMount(){
        this.timer = setInterval(() =>
    {
       this.tick()
    }, 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timer);
    }
    tick(){
        var newTime = this.state.timerSeconds - 1
        if(newTime < 0) { 
            this.setState({
                timerSeconds : 0,
            })
        }
        var min =  String(parseInt(newTime / 60 )) 
        var sec =  String(parseInt(newTime % 60 ))
        secStr = String("0" + sec).slice(-2);
        minStr = String("0" + min).slice(-2);
        this.setState({
            timerSeconds : newTime,
            sec : secStr,
            min: minStr
        })
    }
    loginState() {

        const user = this.props.user
        if (user != undefined, user === true) {
            this.props.navigation.navigate('tabBar')
        }
    }

    resendComponent(){
        const { timerText} = style
        if(this.state.timerSeconds > 0){
            return(<Text style={timerText}>
                {this.state.min + ":" + this.state.sec}
                </Text>)
        }else{
            return(
                <PureButton onPress={() => {
                    self.props.loginUser({ email: self.state.username, pass: self.state.password })
                }}>
                <Text style={style.invalidName}>
                        resend code
                     </Text>
                </PureButton>
            )
        }
    }

    isLoading() {
        // debugger

        if (this.props.loading) {
            return <Loading />
        } else {
            const self = this
            return (
                <PureButton style={{ height: 100, ...style.buttonStyle }} onPress={() => {
                   // self.props.loginUser({ mobile: self.state.username })
                   this.props.navigation.navigate('tabBar')
                }}>
                    <Text style={style.buttonText}>
                        Accept
                     </Text>
                </PureButton>
            )
        }
    }

    render() {
        const { container, textInput, titleText, } = style
        let h = (Dimensions.get('window').height / 2) - 40
        return (
            <View style={{ backgroundColor: primaryColor, flex: 1, }}>
                <Image source={BgPatterImage} style={{ position: 'absolute', width: '100%', resizeMode: 'contain', height: h, top: 0, right: 0 }} />
                <View style={container} >
                    <Text style={titleText}>
                        Enter Accept Code
                </Text>
                    <TextInput style={textInput}
                        placeholder={'Enter Recive Code'}
                        textAlign={'center'}
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username} />
                    <Text style={this.errorStyle}>
                        {this.props.error}
                    </Text>
                    {this.isLoading()}
                    {this.resendComponent()}
                </View>
            
                <PureButton style={style.invalidButton} onPress={() => {
                    self.props.loginUser({ email: self.state.username, pass: self.state.password })
                }}>
                <Text style={style.invalidName}>
                        Enter AS Guest
                     </Text>
                </PureButton>
            </View>
        )
    }


}
const style = StyleSheet.create({
    titleText: {
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff",
        fontSize: 28,
    }, timerText: {
       
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 25,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    },
    container: {
        flex: 1,
        marginRight: 48,
        marginLeft: 48,
        // margin: 48,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    textInput: {
        height: 48,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        borderColor: '#616161',
        borderWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        color: primaryColor,

    },
    errorStyle: {
        marginTop: 12,
        paddingTop: 8,
        color: '#616161'
    },
    buttonStyle: {
        alignSelf: 'stretch',
        height: 48,
        borderRadius: 10,
        backgroundColor: "#0c5f91",
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    },
    invalidName: {
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecorationLine: "underline",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "center",
        color: "#1fddd7"
    },
    invalidButton: {
        height: 100 //,alignSelf:'flex-end',
    }
})
const mapStateToProps = ({ loginProps }) => {
    const { email, password, error, loading, user } = loginProps
    return {
        username: email,
        password,
        error,
        loading,
        user
        // loginState : JSON.parse(state.loginProps) 
    }
}
export default connect(mapStateToProps, actions)(Authenticate)
//export default Authenticate