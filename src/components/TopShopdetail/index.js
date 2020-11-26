import React,{useState} from 'react'
import {FlatList,View,StyleSheet,Dimensions,Text,Button} from 'react-native'
import {Card,Rating,Icon,ListItem,Overlay} from 'react-native-elements'
import {Title,Caption,Divider,Surface,List,Modal, Portal,Provider,} from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import Icon_Component from '../IconButtons'

const Icon_Data = [
	{name:"phone",type:"Feather",text:"Call"},
	{name:"location-pin",type:"entypo",text:"Directions"},
	{name:"message",type:"material",text:"Message"},
	{name:"star-outline",type:"ionicon",text:"Rate"},
]
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
export default class App extends React.PureComponent{
	render(){
	return(
		<Surface style={{flex:1,paddingLeft:0,elevation:4}}>
				<View style={{flex:1,flexDirection:'row',paddingBottom:1,justifyContent:'space-between',alignItems:'stretch'}}>
					<View style={{marginLeft:10}}>
						<Text style={{fontSize:26,fontWeight:'900',paddingVertical:4}}>{this.props.route.title}</Text>
						<View style={{flexDirection:'row',alignItems:'center',paddingBottom:4,paddingLeft:0}}>
							<Rating type="custom" ratingColor="#f5ac0f" imageSize={17} readonly startingValue={this.props.route.rating} />
							<Text style={{opacity:.5,paddingHorizontal:0,fontSize:16,fontWeight:'bold'}}>{this.props.route.rating}</Text>
						</View>
						<Text style={{opacity:.5,paddingBottom:4,fontSize:16}}>{this.props.route.address}</Text>							
						<Text style={{opacity:.5,paddingBottom:4,fontSize:16}}>Shop</Text>	
					</View>
					<View style={{marginRight:10}}>
					<FastImage
						source={require('./image.jpeg')}
				        style={{ width: 105, height:104,borderRadius:30,borderWidth:0,borderColor:'black',margin:10,alignSelf:'flex-end' }}
						resizeMode={FastImage.resizeMode.cover}
					/>
					</View>
				</View>
				<View style={{flex:1,paddingVertical:10,flexDirection:'row',justifyContent:'space-around',marginRight:5}}>
					<Icon_Component data={Icon_Data}/>
				</View>
			</Surface>
		
	)
}}
