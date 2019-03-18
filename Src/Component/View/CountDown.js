import React, { Component } from 'react'
import { Text, View,} from 'react-native'
import { ButtonImage } from './'
class CountDowner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { countDownContainer, countDowner, countDownerText, infoView } = _style
    const {imageSource,style , textStyle } = this.props
    return (
        <View style={[countDownContainer ,style]}>
        <View style={countDowner}>
            <Text style={[countDownerText,textStyle]}>
                12:12:12</Text>
        </View>
        <ButtonImage style={infoView} imageSource={imageSource} />

    </View>
    );
  }
}
const _style = {
    countDownContainer: {
        width: null,
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderStyle: "dashed",
        borderWidth: 2,
        borderColor: "#001f75",
    },infoView: {
        position: 'absolute',
        alignSelf: 'center',
        right: 12,
        width: 50,
        height: 50,
        padding: 8,
    },
    countDowner: {
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
}
export default CountDowner;

