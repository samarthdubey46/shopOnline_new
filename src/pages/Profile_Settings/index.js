import React,{useState,useEffect} from 'react'
import {View,Text,Button,StyleSheet,FlatList} from 'react-native'
import {Card,TextInput,Surface} from 'react-native-paper'
import {Avatar} from 'react-native-elements'


const Data = [
	{type:'Top',id:'1'}
]

const RenderTop = (props) => {
	const {navigation,route} = props
	return(
		<Surface style={{elevation:15,height:'30%',backgroundColor:'#1f8bff',alignItems:'center',justifyContent:'center'}}>
			<Avatar
				rounded
                source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}s
              size={100}
              showAccessory
            />
		</Surface>
	)
}
const renderItem = ({item},props) => {
	switch(item.type){
		case 'Top':
			return RenderTop(props)
	}
}
const renderBottom = ({item}) => {
	return
}
const App = (props) => {
	const [firstName,changefirst] = useState('')
	const [lastName,changelast] = useState('')
	const [mobile,changemobile] = useState('')
	const [email,changeemail] = useState('')
	const data = [
		{placeholder:'Firstname',value:firstName,change:changefirst},
		{placeholder:'Lastname',value:lastName,change:changelast},
		{placeholder:'Mobile',value:mobile,change:changemobile},
		{placeholder:'Mobile',value:email,change:changeemail},
	]
	return(
		<View style={{flex:1}}>
			{RenderTop(props)}
			<View style={{height:'70%',backgroundColor:'white'}}>
				<FlatList
					data={data}
				/>
			</View>
		</View>
	)
}

export default App