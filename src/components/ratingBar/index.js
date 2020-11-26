import React from 'react'
import { View, Text, Button } from 'react-native'
import { Rating } from 'react-native-elements'
import Icon from 'react-native-dynamic-vector-icons'

export default class Line extends React.Component {
    state={
        ratingColor: this.props.color,
        startingValue:this.props.value
    }
    render() {
        return (
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{opacity:.5,fontSize:13}}>{this.props.text}</Text>
                <Icon
                    name="star-sharp"
                    type="Ionicons"
                    size={12}
                />
                <Rating
                    readonly
                    type="custom"
                    ratingImage={require('../../Untitled.png')}
                    ratingCount={22}
                    imageSize={4}
                    {...this.state}
                    ratingBackgroundColor='#c8c7c8'
                />
            </View>
        )
    }
}