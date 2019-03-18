import React, { Component } from 'React'
// import { View , Text , View , TouchableWithoutFeedback, Image, ImageBackground } from 'react-native';
import { View, ImageBackground, Image, TouchableWithoutFeedback, Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../resRedux/Action/index'
import { CountDown, Button } from './../View'
import { AppTitleImage, lottery_bg_pattern , festivalRign } from './../../Resource/icons'



class LotteryRow extends Component {


    constructor(props) {
        super(props)
        this.selected = this.selected.bind(this)
        this.detail = this.props.detailCallBack.bind(this)

    }

    selected(id) {
        //this.props.selectLibrary(id)
        console.log(this.props)
        this.detail(id)
    }

    _buildFestival(){
        const { isFestival } = this.props.libarary.item
        console.log(isFestival)
        if(isFestival){
            return(
                <View style={{position: 'absolute',width: null,height: 60,top:0 , bottom:0,left: 0,right:0 }} >
                <Image source={festivalRign} style={style.festivalLeft} />
                <Image source={festivalRign} style={style.festivalRignStyle}/>
                </View>
            )
        }
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
        const {textDesc, giftButton, gift, touchableStyle, countDown, countDownText, imageLogo, patternImg } = style;
        const { libarary } = this.props
        return (
            <ImageBackground style={{ flex: 1, flexDirection: 'column', }}>
                <TouchableWithoutFeedback
                    style={touchableStyle}
                    onPress={() =>
                        this.selected(libarary.item.id)
                    }>
                    <View style={this.isSelectedView()} >
                        <ImageBackground
                            style={patternImg}
                            source={lottery_bg_pattern} />
                        <CountDown
                            style={countDown}
                            textStyle={countDownText} />
                        <Image
                            style={imageLogo}
                            source={AppTitleImage} />
                        <Text
                            style={textDesc}>
                            {libarary.item.desc}
                        </Text>

                        <View style={gift}>
                            <Button text={"Enter To Lottery"} style={giftButton} />
                            {this._buildFestival()}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>


        )
    }
}

const style = {
    festivalRignStyle:{position: 'absolute',width: 40,height: '100%',right: 26 ,resizeMode:'contain'},
    festivalLeft:{width: 40,height: '100%', transform: [{ rotateY: '180deg'},
      ],left:26 ,resizeMode:'center'},
    festivalImage : {width: 42,height: 40.8},
    touchableStyle: { flex: 1, flexDirection: 'row', justifyContext: 'center' },
    patternImg: { position: 'absolute', resizeMode: 'cover', opacity: 0.5, top: 0, bottom: 0, right: 0, left: 0 },
    imageLogo: { backgroundColor: '#fff', width: '60%', height: 95.8, resizeMode: 'center' },
    countDownText: { fontSize: 19, letterSpacing: 5 },
    countDown: { borderWidth: 0, backgroundColor: 'blue', height: 50, },
    textTitle: {
        fontSize: 22,
        color: '#000',
        padding: 12,
        textAlign: 'center',

    },
    textDesc: {
        fontSize: 16,
        color: '#000',
        padding: 12,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: "#ffffff",
        margin: 16,
    },
    gift: {
        justifyContent: 'center',
        backgroundColor: "#1fddd7",
        width: null,
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 12,
    },
    giftButton: {
        backgroundColor: '#d9fffe',
        height: 36,
        borderRadius: 18, padding: 8, shadowColor: '#e40b5f',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 0,
    }
}

const mapStateToProps = state => {
    return { selectedLibId: state.selectLibrary }
}

export default connect(mapStateToProps, actions)(LotteryRow);
//export default LotteryRow;