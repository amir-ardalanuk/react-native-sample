import React, { Component } from 'react';
import  {View , ImageBackground , Text , StyleSheet , TouchableWithoutFeedback , TextInput} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../../resRedux/Action'
import LoadingVw from '../View/LoadingView'
 
class SignInCntrl extends Component { 

    constructor(props){
        super(props)
        this.state = {
            username : '' ,
            password : '',
            loading : false
        }
    }

    loginState(){
        
        const user = this.props.user
        if ( user != undefined , user === true){
                this.props.navigation.navigate('tabBar')
        }
    }

    isLoading(){
       // debugger
        if(this.props.loading) {
            return <LoadingVw />
        }else{
            const self = this
            return(
                <TouchableWithoutFeedback onPress={ () => {
                    self.props.loginUser({email:self.state.username , pass :self.state.password})
                }
                } >
                     <Text style={style.button}>
                         Sign In
                     </Text>
                 </TouchableWithoutFeedback>
            )
        }
    }

    render(){
        const {container ,textInput} = style
        this.loginState()
        return(
            <View style = {{backgroundColor : "3e3e3e" , flex : 1}}>
               <View style={container} >
                   <TextInput  style={textInput} 
                   placeholder = {'username'}
                   textAlign={'center'}
                   onChangeText={(username) => this.setState({username})}
                   value={this.state.username} />

                   <TextInput  style={textInput} 
                    style={textInput} 
                    placeholder = {'password'}
                    secureTextEntry
                    textAlign={'center'}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    />

                    <Text style={this.errorStyle}>
                        {this.props.error}
                    </Text>

                    {this.isLoading()}
               </View>
               

            </View>
        )
    }

    
}
const style = StyleSheet.create({
    container : {
        flex :1 ,
        justifyContent: 'center' , 
        alignItems: 'center',
    },
    textInput :{
        marginTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        width: '80%' ,
        borderColor:'#616161',
        borderWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        color:'#424242',
        
    } , 
    errorStyle : { 
        marginTop : 12 , 
        paddingTop : 8,
        color : '#616161'
    },
    button :{
        marginTop: 18,
        paddingLeft: 8,
        paddingRight: 8,
        textAlign:'center',
        width: '40%' ,
        backgroundColor:'#616161',
        paddingTop: 12,
        paddingBottom: 12,
        color:'#fff'
        
    }
})
const mapStateToProps = ({loginProps}) => {
     const {email , password , error , loading , user} = loginProps
    return {
        username : email, 
        password, 
        error,
        loading , 
        user
       // loginState : JSON.parse(state.loginProps) 
    }
}
export default connect(mapStateToProps , actions)(SignInCntrl)
//export default SignInCntrl