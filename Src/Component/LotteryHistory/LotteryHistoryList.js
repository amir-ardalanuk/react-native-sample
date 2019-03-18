
import React, { Component } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux'
import ListRow from './LotteryHistory'
import * as action from '../../resRedux/Action/index'

import LottieView from 'lottie-react-native';



class LotteryHistoryList extends Component {
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
      
       // this.renderRow = this.renderRow.bind(this)
        // this.showLotteryDetail = this.showLotteryDetail.bind(this)
    }
    componentWillUnmount() {
        this.props.selectLibrary(null)
    }
    renderRow(lib) {
        return <ListRow />
    }

   
    render() {
        console.log(this.props)
        return (
            <SafeAreaView style={style.container}>
                {/* <LottieView style={style.backgroundAnimation}
                    source={require('./../../Resource/bg.json')}
                    autoPlay
                    loop
                /> */}
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
   
    backgroundAnimation: { position: 'absolute', bottom: 0, top: 0, right: 0, left: 0, width: '100%', height: '100%', },
    leftHeaderButton: {
        position: 'absolute',

        left: 16,
        width: 35,
        height: 35
    },
    rightHeaderButton: {
        position: 'absolute',
        right: 16,
        width: 35,
        height: 35
    },
    header: {
        width: '100%',
        height: 55,
        // backgroundColor:"#002075",
        justifyContent: 'center'
    },
    container: { flex: 1,padding: 18 },
    titleImage: {
        width: 96,
        height: 20.3,
        resizeMode: 'center',
        alignSelf: 'center',
    }
}
const mapStateToProps = state => {
    return { lib: state.lib }
}
export default connect(mapStateToProps, action)(LotteryHistoryList);