import React,{useState,useEffect,useCallback} from 'react'
import {View,Text,Button,StyleSheet,Image,TouchableOpacity,Dimensions,InteractionManager,FlatList} from 'react-native'
import {Card,Avatar,Divider} from 'react-native-elements'
import {Drawer,ActivityIndicator,Colors,Portal} from 'react-native-paper'
import {fetches,images_fetch} from '../../data_fetchers/customer_profile'
import { connect } from 'react-redux';
import {useSelector,useDispatch} from 'react-redux'
import Item from '../../components/row_widget/index'
import Fab from '../../components/fabBar'
import Items  from '../../components/column_widgets/index'
import Icon from 'react-native-dynamic-vector-icons'

const width = Dimensions.get('window').width

const Data = [
	{id:1,name:"notifications-outline",text:"Notifications",type:"Ionicons",route:"Notifications"},
	{id:2,name:"settings-outline",text:"Settings",type:"Ionicons",route:'Settings'},
	{id:3,name:"credit-card",text:"Payment",type:"Feather",route:'Payment'},
]
const list = [
  {name:'shopping-cart',text:'Your Orders',type:"shopping-cart",id:0},
  {name:'heart',text:'Liked Products',type:"EvilIcons",id:1},
  {name:'address-book-o',text:'Address Book',type:"FontAwesome",id:2},
]
const list2 = [
  {name:'feedback',text:'Send Feedback',type:"MaterialIcons",id:0},
  {name:'star-outlined',text:'Rate',type:"Entypo",id:2},
  {name:'power',text:'Sign out',type:"Feather",id:1},
  
]
const renderTop = (name_,email) => {
	return(
		<View style={[styles.topcontainer,{paddingBottom:25,paddingTop:15,borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,.2)'}]}>
					<View style={styles.roundImage}>
						<Avatar
				              avatarStyle={{ borderRadius: 0, borderColor: 'rgba(0,0,0,.1)' }}
				              size={100}
				              rounded
				              source={{
				                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
				              }}
				            />
					</View>
					<View>
						<Text style={{fontSize:30,color:'rgba(0,0,0,0.8)'}}> Samarth </Text>
						<Text> samarthdubey46@gmail.com</Text>
					</View>
		</View>
	)
}
const renderMiddle = (navigation) => (
	<View style={[styles.middlecontainer,{borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,.2)',paddingVertical:5}]}>
		{Data.map(item => (
			<Item item={item} navigation={navigation} route={item.route}  id={item.id}/>
		
		))}
	</View>
)
const renderBottom = (navigation) => {
	return(
		<View style={[styles.bottomcontainer,{paddingTop:5}]}>
			<View style={{paddingBottom:10}}>
				{list.map((item) => (
            		<Items item={item} navigation={navigation}   id={item.id} />
        		))}
    		</View>
    		<View style={{backgroundColor:'white',paddingHorizontal:8,paddingVertical:10}}>
    			<Text style={{fontSize:20,opacity:.5,fontStyle:'italic'}}> About </Text>
    		</View>
    		<View style={styles.bottomcontainerBottom}>
    			{list2.map((item) => (
            		<Items item={item} navigation={navigation} id={item.id} size={22} />
        		))}
    		</View>
		</View>
	)

}
const Main_d = [
	{type:'Top',id:'1'},
	{type:'middle',id:'2'},
	{type:'bottom',id:'3'}
]
const renderItem = ({item},props,name,email) => {
	switch(item.type){
		case  'Top':
			return renderTop(name,email)
		case 'middle':
			return renderMiddle(props.navigation)
		case 'bottom':
			return renderBottom(props.navigation)
	}

}
const App = (props) => {
	const name = useSelector(state => state)
	const dispatch = useDispatch()
	let count = 0
	const [name_,changeName_] = useState('Samarth')
	const [email,chanegemail] = useState('samarthdubey46@gmail.com')
	const [isready,changeready] = useState(false)
	const update = async () => {
		const customer = await fetches()
		// console.log(customer.first_name)
		changeName_(customer.first_name)
		chanegemail(customer.email_addess)

	}
	useEffect(() => {
		// update()
		console.log(name_,email)
		InteractionManager.runAfterInteractions(() => {
    	    changeready(true)
    	   })
  		}, []);


	if(!isready){
      return (
        <ActivityIndicator size='large' style={{flex:1,justifycontent:'center',alignItems:'center'}} animating={true} color={Colors.blue300} />   
     )
  	}
	return(
		<View style={{flex:1,backgroundColor:'white'}}>
			<FlatList
				data={Main_d}
				renderItem={item => renderItem(item,props,name,email)}
			/>
			<Fab navigation={props.navigation} />
		</View>
	)
}	
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white'
	},
	roundImage:{
		borderRadius:200,
		// flex:.1,
		alignItems :'center',
		justifyContent :'center',
		width:'35%',
		height:'60%',
		marginHorizontal:0,
	},
	topcontainer:{
		flex:.3,
		alignItems:'center',
		marginVertical:5,
		flexDirection:'row',
		// backgroundColor:'white',	
	},
	middlecontainer:{
		flex:.12,
		flexDirection:'row',
		marginBottom:5,
		justifyContent:'space-around',
		backgroundColor:'white',
		alignItems:'center',

	},
	bottomcontainer:{
		flex:1,
		backgroundColor:'white',



	},
	bottomcontainerTop:{
		flex:1,
		// backgroundColor:'green',

	},
	bottomcontainerBottom:{
		flex:1,

	}
})

export default App
