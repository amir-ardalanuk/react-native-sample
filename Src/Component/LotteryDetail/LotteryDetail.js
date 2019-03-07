
import React, { Component } from 'react'
import { Text, SafeAreaView,View ,TextInput,StyleSheet , TouchableHighlight} from 'react-native'
import {Button} from '../View'


export default class LotteryDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            codeInputCount:2
        };
    }


    

    generateCodeInput(){
        return (
            <View style={{width: null,flexDirection:'column' , }}>
                {
                   Array.apply(0,Array(this.state.codeInputCount)).map(function(x, i){
                        //return this.needCodeInput()
                       return (  <View key= {(i +" ")} style={{height: 50,width: null,flexDirection:'row',marginTop: 5,}}>
                       <Button text={"Add"}   />
                        <TextInput style={style.codeInput}  placeholder={"enter your code"} />
                                    
                   </View>)
                    })
                //   Array.apply(0,this.codeInputCount).map(function(x, i){
                //       return this.needCodeInput()
                //   })
                  }
            </View>
        )
    }

    CountDownCmp() {
        console.log(style)
        const {countDownContainer ,countDowner,countDownerText , infoView} = style
        
        return (
            <View style={countDownContainer}>
            <View></View>
                <View style={countDowner}>
                    <Text style={countDownerText}>
                        12:12:12
                </Text>
                </View>
                <View style={infoView}></View>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
               {this.CountDownCmp()}
               {this.generateCodeInput()}
               <Button text={"Add More Code"} style={{backgroundColor:'red',margin:22 , height:40}} />
            </SafeAreaView>
        );
    }
}
const style = StyleSheet.create({
    countDownContainer: {
        width: null,
        height: 100,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    },countDowner: {
        padding: 8,
        backgroundColor:'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    }, countDownerText: {
        padding:12,
        color: 'white',
    }, infoView: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        padding: 8,
    },codeInput: {
        flex: 1,
        padding:10,
    },
    button: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green' , 
        flex:1 , 
        borderRadius:10,
    }
}) 