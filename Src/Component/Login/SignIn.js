import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput , Dimensions } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../resRedux/Action'
import { Loading, PureButton , Button } from '../View'
import { primaryColor } from '../../Theme'
import {BgPatterImage , AppTitleImage} from './../../Resource/icons'

class SignInCntrl extends Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loading: false
        }
    }

    loginState() {

        const user = this.props.user
        if (user != undefined, user === true) {
            this.props.navigation.navigate('CodeAuth')
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
                    self.props.loginUser({ mobile: self.state.username })
                }}>
                    <Text style={style.buttonText}>
                        Sign In
                     </Text>
                </PureButton>
            )
        }
    }

    render() {
        const { container, textInput } = style
        let h = (Dimensions.get('window').height / 2 ) - 40
        this.loginState()
        return (
            <View style={{ backgroundColor: primaryColor, flex: 1 ,}}>
            <Image source={BgPatterImage} style={{ position: 'absolute',width: '100%',resizeMode:'contain',height: h, top:0,right:0 }} />
                <View style={container} >
                <Image source={AppTitleImage} style={{width: '100%',height: 80,resizeMode:'contain', top:0,right:0 }} />
                    <TextInput style={textInput}
                        placeholder={'Phone Number'}
                        textAlign={'center'}
                        onChangeText={(username) => this.setState({ username })}
                        value={this.state.username} />

                    {/* <TextInput style={textInput}
                        style={textInput}
                        placeholder={'password'}
                        secureTextEntry
                        textAlign={'center'}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    /> */}

                    <Text style={this.errorStyle}>
                        {this.props.error}
                    </Text>

                    {this.isLoading()}
                  
                </View>

                <PureButton style={style.invalidButton} onPress={() => {
                       
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
    invalidButton:{

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
export default connect(mapStateToProps, actions)(SignInCntrl)
//export default SignInCntrl