import React from 'react';
import {Dimensions,View,Text,Button,Image,StyleSheet,FlatList,TouchableWithoutFeedback} from 'react-native'
import {Avatar,Card} from 'react-native-elements'
import Icon from 'react-native-dynamic-vector-icons'
import FastImage from 'react-native-fast-image'

const WIDTH = Dimensions.get('screen').width

const TopCategory = [
	{id:'1',photo:require('./HOME_1.jpg')},
	{id:'2',photo:require('./HOME_2.jpg')},
	{id:'3',photo:require('./HOME_3.jpg')},
	{id:'4',photo:require('./HOME_4.jpg')},
	{id:'5',photo:require('./HOME_5.jpg')},
	{id:'6',photo:require('./HOME_6.jpg')},
	{id:'7',photo:require('./HOME_7.jpg')},

]

const rendritem = (item) => (
    	<TouchableWithoutFeedback  onPress={() => {}}>
    	  <FastImage
    	    source={item.item.photo}
    	    resizeMethod="auto"
    	    resizeMode={FastImage.resizeMode.contain}
    	    style={{ width: (WIDTH) / 4,aspectRatio: 1,borderRadius:20 }}
    	  />
    	</TouchableWithoutFeedback>
)
const App = (props) => (
	<FlatList
		horizontal
		data={TopCategory}
		renderItem={(item) => rendritem(item)}
	/>
)
export default App