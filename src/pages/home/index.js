import React,{useState,useEffect} from 'react';
import {Dimensions,Image,View,Text,Button,StyleSheet,FlatList,TouchableWithoutFeedback,InteractionManager} from 'react-native'
import Top from '../../components/topSliding'
import SlidingImages from '../../components/SlidingImages'
import RowCategory from '../../components/RowCategory'
import {Card} from 'react-native-elements'
import {Drawer,Surface,ActivityIndicator,Colors} from 'react-native-paper'
import Fab from '../../components/fabBar'


const data = [
	{photo:require('./h1.webp'),id:1},
	{photo:require('./h2.webp'),id:2},
	{photo:require('./h3.webp'),id:3},
	{photo:require('./h4.webp'),id:4},
]
const images2 = [
	{id:'1',photo:require('../../components/topSliding/HOME_1.jpg')},
	{id:'2',photo:require('../../components/topSliding/HOME_2.jpg')},
	{id:'3',photo:require('../../components/topSliding/HOME_3.jpg')},
	{id:'4',photo:require('../../components/topSliding/HOME_4.jpg')},
	{id:'5',photo:require('../../components/topSliding/HOME_5.jpg')},
	{id:'6',photo:require('../../components/topSliding/HOME_6.jpg')},
	{id:'7',photo:require('../../components/topSliding/HOME_7.jpg')},
	{id:'8',photo:require('../../components/topSliding/HOME_3.jpg')},
	{id:'9',photo:require('../../components/topSliding/HOME_6.jpg')},
	{id:'10',photo:require('../../components/topSliding/HOME_2.jpg')},
	{id:'11',photo:require('../../components/topSliding/HOME_3.jpg')},
	{id:'12',photo:require('../../components/topSliding/HOME_4.jpg')},
	{id:'13',photo:require('../../components/topSliding/HOME_1.jpg')},
	{id:'14',photo:require('../../components/topSliding/HOME_6.jpg')},
	{id:'15',photo:require('../../components/topSliding/HOME_7.jpg')},
	{id:'16',photo:require('../../components/topSliding/HOME_3.jpg')},
]



const WIDTH = Dimensions.get('screen').width
const Home = (props) => {
    return(
            <View style={styles.cardBuys} >
				<Text>as</Text>            	
            </View>
    )
}
const daa = [
	{id:'1', type: 'TopslidingComponent', props: {}},
	{id:'2', type: 'SlidingImagesComponent', props: {}},
	{id:'3', type: 'RowCategoryComponent', props: {}},
]

const RowCategoryComponent = props => (
	<Drawer.Section title="Shop By Category">
		<View style={styles.topBuys}>
			<Card containerStyle={styles.topBuys} >
				<RowCategory data={images2} />
			</Card>
		</View>
	</Drawer.Section>

)
const SlidingImagesComponent = props => (
	<View style={styles.highlightContainer} >
		<SlidingImages data={data} height={2.5} />
	</View>
)

const TopslidingComponent = props => (
	<View style={styles.topContainer}>
		<Top/>
	</View>
)

const flatListRenderFunction = item => {
	switch(item.item.type){
		case 'TopslidingComponent' :
			return TopslidingComponent(item.props);
	 	case 'SlidingImagesComponent':
	 		return SlidingImagesComponent(item.props);
 		case 'RowCategoryComponent':
 			return RowCategoryComponent(item.props)
		default:
			return (<Text>{item.type}</Text>)
	}
}

export default class App extends React.Component{
	state = {
		isready:false
	}
	componentDidMount(){
		InteractionManager.runAfterInteractions(() => {
			this.setState({
				isready:true
			})
       	})
	}
	render(){
		if(!this.state.isready){
			return (
        		<ActivityIndicator size='large' style={{flex:1,justifycontent:'center',alignItems:'center'}} animating={true} color={Colors.blue300} />
      		)
		}
		return(
        <View style={styles.container}>
			<FlatList
				data={daa}
				renderItem = {flatListRenderFunction}
				keyExtractor = {(item) => (item.id)}
			/>
			<Fab navigation={this.props.navigation} />
		</View>
		)
	}
}

const styles = StyleSheet.create({
	topBuys:{
		flex:1,
		marginTop:2,
		// backgroundColor:'red',
		justifyContent:'center',
		alignItems:'center'
	},
	container:{
		flex:1,
		// backgroundColor:'red0',
		// justifyContent:'center',
		// alignItems:'flex-start'
	},
	topContainer:{
		flex:1,
		backgroundColor:'white',
		marginBottom:10
	},
	highlightContainer:{
		flex:1,
		// backgroundColor:'green',
		marginVertical:10,
		justifyContent:'center',
		alignItems:'center'
	},
	cardBuys:{
		backgroundColor:'black',
		flex:1
	}
})

