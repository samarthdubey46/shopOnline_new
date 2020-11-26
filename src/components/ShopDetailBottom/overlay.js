import React,{useState} from 'react'
import {FlatList,View,StyleSheet,Dimensions,Text,Button} from 'react-native'
import {Card,Rating,Icon,ListItem,Overlay} from 'react-native-elements'
import {Title,Caption,Divider,Surface,List,Modal, Portal,Provider,} from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import Icons from 'react-native-dynamic-vector-icons'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const overlay = (item,set,vis,details) => (
	<Overlay isVisible={vis} overlayStyle={{width:WIDTH / 1.5,nmheight:HEIGHT / 2}} onBackdropPress={() => set(!vis)}>
		<Title> Open Hours</Title>
		{details.open_hours.map(item => (
			<View  key={item.day} style={{flexDirection:'row',paddingVertical:(HEIGHT-1400 / 2) / 7,justifyContent:'space-between',alignItems:'center'}}>
				<Text style={{opacity:.8,fontSize:16,fontFamily:'normal'}}>{item.day}</Text>
				<Text style={{opacity:.6,fontSize:16,fontFamily:'normal'}} >{item.open} - {item.close}</Text>
			</View>
		))}
	</Overlay>
)
export default overlay