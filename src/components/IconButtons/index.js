import React,{useState} from 'react'
import {FlatList,View,StyleSheet,Dimensions,Text,Button} from 'react-native'
import {Card,Rating,Icon,ListItem,Overlay} from 'react-native-elements'
import {Title,Caption,Divider,Surface,List,Modal, Portal,Provider,} from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import Icons from 'react-native-dynamic-vector-icons'

const Icon_Data = [
	{name:"phone",type:"Feather",text:"Call"},
	{name:"location-pin",type:"entypo",text:"Directions"},
	{name:"message",type:"material",text:"Message"},
	{name:"star-outline",type:"ionicon",text:"Rate"},
]
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const App = (props) => {
	return(
		props.data.map(item => (
			<View key={item.text} style={{justifyContent:'center',alignItems:'center'}}>
				<Icon
					name={item.name}
					type={item.type}
					raised
					size={20}
					reverse
					color="#1f8bff"
				/>
				<Text>{item.text}</Text>
			</View>

		))

	)

}
export default App