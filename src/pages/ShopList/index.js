import React,{useState} from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'
import {Card,Divider,Rating,Button} from 'react-native-elements'
import FastImage from 'react-native-fast-image'
import { Searchbar,Caption,Title,Color } from 'react-native-paper';
import Icon from 'react-native-dynamic-vector-icons'
import Fab from '../../components/fabBar'


const Data = [
	{id:'1',address:'balaji Ward ',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6OadjcdjmYIiYdXIPsEB27ihQ3TB2qJ440w&usqp=CAU'
,title:'KFC'
,rating:4.5
,totalRatings:199,
desc:'',
phone:9826756170,
website:'www.lourem-ipsum.com',
open_hours : [
	{day:'Mon',open:'8am',close:'8pm'},
	{day:'Tue',open:'8am',close:'8pm'},
	{day:'Wed',open:'8am',close:'8pm'},
	{day:'Thu',open:'8am',close:'8pm'},
	{day:'Fri',open:'8am',close:'8pm'},
	{day:'Sat',open:'8am',close:'8pm'},
	{day:'Sun',open:'8am',close:'8pm'},
]
},	
]
const keyExtractor = (item, index) => index.toString()
const renderItem = ({item},navigation) => (
	<View style={styles.container_Shop}>
		<View style={{flex:.28}} >
			<FastImage
				style={{width:80,borderRadius:20,height:125}}
				source={{uri : item.image}}
				resizeMode={FastImage.resizeMode.cover}	
			/>
		</View>
		<View style={{flex:.7,paddingTop:5,backgroundColor:'white'}}>
			<Text style={{marginHorizontal:0,fontFamily:'notoserif',paddingBottom:0,fontSize:24,fontWeight:'bold'}} >{item.title}</Text>
			<Text style={{opacity:.7,marginHorizontal:0,fontSize:15,fontFamily:'notoserif',}}>{item.address} </Text>
			<View style={{flexDirection:'row',marginHorizontal:0,marginVertical:5,justifyContent:'space-between'}}>
				<View style={{flexDirection:'row',paddingBottom:3}}>
					<Text style={{fontWeight:'bold'}}> {item.rating} </Text>
					<Rating type="custom" ratingColor="#f5ac0f" imageSize={17} readonly startingValue={item.rating} />
				</View>
			</View>
			<View style={{justifyContent:'space-between',backgroundColor:'white',flex:1,flexDirection:'row'}}>
				<Button icon={
					<Icon
						name="whatsapp"
						type="FontAwesome"
						style={{paddingRight:10}}
					/>	
				} 
				title="Message"
				containerStyle={{flex:.5}} type="outline"  />
				<Button title="View" containerStyle={{flex:.5}} type="outline" onPress={() => {navigation.navigate('detail',{details:item})}} />
			</View>
		</View>
	</View>
)

const App = (props) => {
	const [searchQuery, setSearchQuery] = useState('');	
	const onChangeSearch = query => setSearchQuery(query);	
	return(
		<View style={styles.container}>
			<Searchbar
      			placeholder="Search"
		      	onChangeText={onChangeSearch}
      			value={searchQuery}
				style={{marginVertical:15}}
    		/>
			<FlatList
				data={Data}
				renderItem={item => renderItem(item,props.navigation)}
				keyExtractor={keyExtractor}
			/>
			<Fab navigation={props.navigation} />
		</View>
	)
}
const styles = StyleSheet.create({	
	container_Shop : {
		flex:1,
		backgroundColor:'white',
		flexDirection:'row',
		margin:10,
		paddingBottom:5,
		borderBottomWidth:1,
		borderBottomColor:'rgba(0,0,0,.1)'
	},
	container:{
		flex:1,
	//	backgroundColor:'blue'
	},

})
export default App
