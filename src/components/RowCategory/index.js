import React from 'react';
import {Dimensions,Image,View,Text,Button,StyleSheet,FlatList,TouchableWithoutFeedback} from 'react-native'
import {Card} from 'react-native-elements'
import {Drawer,Surface} from 'react-native-paper'
import FastImage from 'react-native-fast-image'

const WIDTH = Dimensions.get('screen').width

const renderItem = ({ item, size }) => (
    <TouchableWithoutFeedback onPress={() => {}}>
      <FastImage
        source={item.photo}
        resizeMode={FastImage.resizeMode.contain}
        style={{ width: (WIDTH) / 4, height: undefined, aspectRatio: 1,alignSelf:'center' }}
      />
    </TouchableWithoutFeedback>
 )
const App = (props) => (
    	<FlatList
            data={props.data}
            numColumns={4}
            contentContainerStyle={{alignItems:'center'}}
            renderItem={renderItem}
          />
)
export default App