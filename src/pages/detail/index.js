import React,{useState} from 'react'
import {FlatList,View,StyleSheet,Dimensions,Text,Button} from 'react-native'
import {Card,Rating,Icon,ListItem,Overlay} from 'react-native-elements'
import {Title,Caption,Divider,Surface,List,Modal, Portal,Provider,} from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import Icons from 'react-native-dynamic-vector-icons'
import Top_Component from '../../components/TopShopdetail'
import RenderBottom from '../../components/ShopDetailBottom'
import Fab from '../../components/fabBar'


const Data = [
	{type:'Top',id:'1'},
	{type:'TopContent',id:'2'},
	{type:'Bottom',id:'3'},
]
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const renderTop = (props) => {
	const {route} = props 
	return(
		<View style={styles.TopImage}>
			<FastImage
				style={{width:WIDTH,height:HEIGHT/4.3,borderRadius:WIDTH/49}}
				source={{uri:route.params.details.image}}
				resizeMode={FastImage.resizeMode.cover}
			/>
		</View>
	)
}
const renderTopContent = (props) => {
	const {route} = props
	const details = route.params.details
	return(
		<View style={{flex:1}}>
			<Top_Component route={details} />
		</View>
	)		 	
}


const renderItem = (item,props,is,set) => {
	switch(item.item.type){
		case 'Top' :
			return renderTop(props)
		case 'TopContent':
			return renderTopContent(props)
		case 'Bottom' :
			return RenderBottom(props,is,set)
		default :
			<Button title="asd" onPress={() => console.log(props.route.params.details)}/>
	}
}

const keyExtractor = (item,index) => String(index)
const App = (props) => {
	const [isvisible,setvisible] = useState(false)
	return(
		<View style={styles.Container}>
			<FlatList
				data={Data}
				renderItem={item => renderItem(item,props,isvisible,setvisible)}
				keyExtractor={keyExtractor}
			/>
			<Fab navigation={props.navigation}/>
		</View>
	)
}
const styles = StyleSheet.create({
	Container:{
		flex:1,
		backgroundColor:'white',
	},
	TopImage:{
		flex:1,
	},
	TitleContainer:{
		flex:1,
		paddingTop:10,
	}
})
export default App
