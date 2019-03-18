
import React, { Component } from 'react';
import { FlatList, SafeAreaView, View , Image } from 'react-native';
import { connect } from 'react-redux'
import ListRow from './LotteryRow'
import * as action from '../../resRedux/Action/index'
import Theme from './../../Theme'
import {AppTitleImage} from './../../Resource/icons'
import {ButtonImage} from './../View'
import { profile , notifi } from './../../Resource/icons'
import LottieView from 'lottie-react-native';



class LotteryList extends Component {
    static navigationOptions = { header: null }
   
    constructor(props){
        super(props)
        this.openProfile = this.openProfile.bind(this)
        this.renderRow = this.renderRow.bind(this)
        this.showLotteryDetail = this.showLotteryDetail.bind(this)
    }
    componentWillUnmount() {
        this.props.selectLibrary(null)
    }
    renderRow(lib) {
        return <ListRow libarary={lib} detailCallBack={this.showLotteryDetail}/>
    }

    openProfile(){
        
        this.props.navigation.navigate('Profile')
    }

     showLotteryDetail(id){
        this.props.navigation.navigate('LotteryDetail')
    }
    render() {
        console.log(this.props)
        return (
            <SafeAreaView style={style.container}>
              <LottieView style={style.backgroundAnimation}
                source={require('./../../Resource/bg.json')}
                autoPlay
                loop
                />
                <View style={style.header}>
                <ButtonImage imageSource={profile} style={style.rightHeaderButton} onPress={this.openProfile} />
                <ButtonImage imageSource={notifi} style={style.leftHeaderButton}/>
                  <Image style={style.titleImage} source={AppTitleImage} />
                </View>
                <FlatList
                    data={this.props.lib}
                    renderItem={this.renderRow}
                    // numColumns={2}
                    keyExtractor={(item, index) => index.toString()} >
                </FlatList>
            </SafeAreaView>


        )
    }
}
const style = { 
    backgroundAnimation:{position:'absolute',bottom:0,top:0,right:0,left:0,width: '100%',height: '100%',},
    leftHeaderButton : {
        position: 'absolute',

        left:16,
        width: 35,
        height: 35
    },
    rightHeaderButton : {
        position: 'absolute',
        right:16,
        width: 35,
        height: 35
    },
    header :{
        width: '100%',
        height: 55,
        // backgroundColor:"#002075",
        justifyContent:'center'
    },
    container : { flex: 1, backgroundColor: Theme.backgroundColor },
    titleImage: {
        width: 96,
        height: 20.3,
        resizeMode:'center',
        alignSelf: 'center',
      }
}
const mapStateToProps = state => {
    return { lib: state.lib }
}
export default connect(mapStateToProps, action)(LotteryList);