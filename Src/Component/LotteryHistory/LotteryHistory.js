import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { _ad } from '@icons'
import Theme from '@theme'
class LotteryHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderState(title , sub) {
        return (
            <View style={[Theme.cardStyle,style.stateContainer]}>
                <View style={style.stateHeader}>
                    <Text style={{ color: 'white',textAlign:'center',fontSize:9 }}>
                    {title}
                    </Text>
                </View>
                <View>
                    <Text style={style.stateTitle}>
                        {sub}
                </Text>
                </View>
            </View>
        )

    }
    render() {
        console.log(this.props)
        const { container, header, footer, headerRight, headerLeft, lotteryImage } = style
        return (
            <View style={{ padding: 8,...Theme.cardStyle }}>
                <View style={container} >
                    <View style={header}>

                        <View style={headerLeft}>
                            <Text> ABC </Text>
                            <View style={{flexDirection:'row' , alignSelf:'stretch',justifyContent:'space-around'}}>
                            {this.renderState("Win" , "5")}
                            {this.renderState("progress" , "5")}
                            {this.renderState("Loss" , "5")}
                            </View>
                           
                        </View>
                        <View style={headerRight}>
                            <Image style={lotteryImage} source={_ad} />
                           
                        </View>
                    </View>
                    <View style={footer}>
                    <Text style={{fontSize:16 , padding:4, color:'#fff',}}> Detail </Text>
                    </View>
                </View>
            </View>

        );
    }
}

const style = {
    stateTitle: {
        fontSize: 19,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 32,
        letterSpacing: 0,
        textAlign: "center",
        color: "#002075",
        padding:2,
    },
    stateBody: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    stateHeader: {
        justifyContent: 'center',
        width: null,
        height: 20,
        backgroundColor: "#002075"
    },
    stateContainer: {
       flexGrow: 0,
    //    height: 60,
        width:"28%",
        borderRadius: 12,
        overflow:'hidden',
        borderColor:'#002075',
        borderWidth:1,
    },
    lotteryImage: {
        height: 125,
        width: 125,
        resizeMode: 'center',
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1.8,
        borderColor: "#e40b5f",
        overflow: 'hidden',
        borderRadius: 10,

    },
    header: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    headerRight: {

        height: null,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    headerLeft: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
       
      //  height: 24,
        backgroundColor: "#e40b5f"
    }
}
export default LotteryHistory;
