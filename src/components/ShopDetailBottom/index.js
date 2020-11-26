import React,{useState} from 'react'
import {FlatList,View,StyleSheet,Dimensions,Text,Button} from 'react-native'
import {Card,Rating,Icon,ListItem,Overlay} from 'react-native-elements'
import {Title,Caption,Divider,Surface,List,Modal, Portal,Provider,} from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import Icons from 'react-native-dynamic-vector-icons'
import overlay from './overlay'


const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const RenderBottom = (props,vis,set) => {
	const {route} = props
	const details = route.params.details
	const DATA = [
	{icon:'shopping-store',type:'Fontisto',title:details.title,id:'1'},
	{icon:'location-pin',type:'Entypo',title:details.address,id:'2'},
	{icon:'old-phone',type:'Entypo',title:details.phone,id:'3'},
	{icon:'globe',type:'FontAwesome',title:details.website,id:'4'},
	{icon:'clockcircleo',type:'AntDesign',title:'Open Hours',id:'5'},
	]
	return(
		<View style={{flex:1,paddingTop:9}}>
			{DATA.map(item => {
				if(item.title !== "Open Hours"){
					return(
						<ListItem
							title={item.title}
							leftIcon={() => (
								<Icons
									name={item.icon}
									type={item.type}
									color="#1f8bff"
									size={22}
								/>
							)}
							titleStyle={{fontSize:16,opacity:.6}}
							containerStyle={{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,.1)'}}
						/>)
				}
				return (
					<View style={{flex:1}}>
					<ListItem
							title={item.title}
							leftIcon={() => (
								<Icons
									name={item.icon}
									type={item.type}
									color="#1f8bff"
									size={22}
								/>
							)}
							onPress={() => (set(true))}
							titleStyle={{fontSize:16,opacity:.6}}
							containerStyle={{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,.1)'}}
						/>
						{overlay(item,set,vis,details)}
					</View>
				)


			})}
		</View>
	)
}
export default RenderBottom 
