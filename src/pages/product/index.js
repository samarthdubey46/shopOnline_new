import React,{useState} from 'react'
import {View,Text,StyleSheet,FlatList,Dimensions,TouchableOpacity} from 'react-native'
import {Rating,Card,Button,Avatar,ListItem} from 'react-native-elements'
import {Title,Caption,Divider,Surface,Drawer,DataTable} from 'react-native-paper'
import SlidingImages from '../../components/SlidingImages'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/Ionicons'
import RatingBar from '../../components/ratingBar'
import Fab from '../../components/fabBar'



const ratings = [
    {text:'5',color:"#04d148" , value:18},
    {text:'4',color:"#05ed2f" , value:16},
    {text:'3',color:"#47ff0a" , value:15},
    {text:'2',color:"#f7f705" , value:10},
    {text:'1',color:"#e00000" , value:5},
]


const Q_A = [
    { question: 'Does One Plus have cameras', answer: 'Yes It Does',id:'1'},
    { question: 'Does One Plus have cameras', answer: 'Yes It Does',id:'2'},
    { question: 'Does One Plus have cameras', answer: 'Yes It Does',id:'3'},
    { question: 'Does One Plus have cameras', answer: 'Yes It Does',id:'4'},
    { question: 'Does One Plus have cameras', answer: 'Yes It Does',id:'5'},
]

const List = [
    {
        title: 'Delivery Bu 27 June',
        icon: 'truck-delivery-outline'
    },
    {
        title: 'Cash On Delivery Available',
        icon: 'cash'
    },
]
const images = [
	{id:'1',photo:require('./as2.webp')},
	{id:'2',photo:require('./as.webp')},
	{id:'3',photo:require('./as3.webp')},
	{id:'4',photo:require('./as4.webp')},
	{id:'5',photo:require('./cart_t1.jpeg')},

]
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const Data = [
	{id:'1',type:'TopImages',payload:images,},
	{id:'2',type:'TopContent',payload:undefined,},
	{id:'3',type:'Options',payload:undefined,},
	{id:'4',type:'delivery',payload:undefined,},
	{id:'5',type:'details',payload:List,},
	{id:'6',type:'Q_A',payload:Q_A,},
	{id:'7',type:'Reviews',payload:ratings,},
	{id:'8',type:'Highlights',payload:ratings,},

]


const Top = (props,payload) => {
	const item = props.route.params
	return(
		<View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
			<SlidingImages  dark data={payload.payload} height={2.5}/>
			{/*<Button title="asd" onPress={() => console.log(props.route.params)} />*/}
		</View>
	)
}
const Topcontent = (props) => {
	const item = props.route.params
	return(
		<View style={{marginVertical:0,backgroundColor:'white',paddingBottom:10}}>
			<View style={{marginHorizontal:10,paddingBottom:1}}>
				<Text style={{fontSize:25}}>{item.name}</Text>
				<Text style={{fontSize:19,fontStyle:"italic",opacity:.9}}>₹{item.price}</Text>
				<Rating
                        imageSize={17}
                        readonly
                        startingValue={3.5}
                        style={{ marginBottom: 0, alignSelf: 'flex-start', marginLeft: 0 }}
                    />
				<Text style={{fontSize:18,opacity:.6}}>{item.category}</Text>
			</View>
		</View>
	)
}
const renderItems = ({item},options) => {
	return(
			<TouchableOpacity style={{flex:1}}>
				<Card containerStyle={{marginRight:0,marginTop:2,marginLeft:0,flex:1,borderWidth:.5,width:WIDTH / options.length,}}>
					<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
						<Text style={{color:'#009afa',fontSize:16}}> {item.options[0]} </Text>
						<Text style={{fontSize:14,opacity:.7}}>{item.name}</Text>
					</View>
				</Card>
			</TouchableOpacity>
	)
}
const OptionsRender = (props) => {
	const item = props.route.params
	const options = item.options
	return(
		<View style={{marginVertical:10}}>
			<FlatList
				horizontal
				data={options}
				renderItem={(item) => renderItems(item,options)}
				keyExtractor={(item) => item.name}
			/>
		</View>
	)
}

const DeliveryRender = props => {
	return(
		<Card containerStyle={{marginVertical:1,marginHorizontal:0,flex:1,width:WIDTH,marginLeft:0}}>
			<View style={{flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
				<Text style={{ fontSize: 15, }}>Deliver To - Samarth.., L.A</Text>
                    <TouchableOpacity >
                        <Text style={{ borderColor: 'rgba(0,0,0,.1)', borderWidth: 1, fontSize: 17, color: '#169ff5' }}> Change </Text>
                    </TouchableOpacity>
			</View>
		</Card>
	)
}
const Detailsrender = (item,props) => {
	return(
		<Card containerStyle={{marginVertical:1,width:WIDTH,marginLeft:0,marginTop:10}}>
		{
            item.payload.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={() => <Icon name={item.icon} size={20} style={{opacity:.5}} />}
                    bottomDivider
                    chevron																								
                />
            ))
        }
        </Card>
	)
}
const renderone = ({item}) => (
	 <View style={{ marginBottom: 15, borderBottomWidth: 0, borderBottomColor: 'rgba(0,0,0,.2)' }}>
	 	<Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical:5 }}> Q :  {item.question}</Text>
        <Text style={{ fontSize: 14,marginVertical:5 }}> A : {item.answer}</Text>
	 </View>
)
const renderQuestionAnswer = (item,props) => {
	return(
		<Card title="Questions & Answers" containerStyle={{width:WIDTH,marginLeft:0}}>
			<FlatList
				data={item.payload}
				renderItem={item => renderone(item)}
			/>
			<TouchableOpacity>
                    <Text style={{ paddingTop: 0, color: '#05c97f', fontFamily: 'monospace', }}>Read All Answer</Text>
            </TouchableOpacity>
		</Card>
	)
}
const reviewRenderer = ({item},props) => {
	return(
		<View style={{flex:1,marginVertical:11}}>
			<View style={{flexDirection:'row',flex:.2,justifyContent:'center',alignItems:'center'}}>
				<View style={{backgroundColor:'#009afa',flexDirection:'row',flex:.3,justifyContent:'space-around',alignItems:'center'}}>
					<Text style={{color:'white',fontSize:16}}>{item.rating}</Text>
					<Icons name="star-outline" size={20} color="white"/>
				</View>
				<View style={{flex:1,marginHorizontal:20}}>
					<Text style={{fontWeight:'bold',fontSize:15,opacity:.7}}>{item.name}</Text>
				</View>
			</View>
			<View style={{flex:1,paddingVertical:15,}}>
				<Text style={{letterSpacing:1.5}}>{item.Text}</Text>
			</View>
			{item.photos.length > 0  && (
			<View style={{flex:1,flexDirection:'row',marginTop:0,alignItems:'center',justifyContent:'center',paddingBottom:10}}>
				{item.photos.map(item => 
					<FastImage
						style={{ width: (WIDTH - 10) / 3, height: 39 }}
						source={item}
						resizeMode={FastImage.resizeMode.contain}
					/>
				)}
			</View>)}
			<Divider style={{height:1}}/>
		</View>

	)
}
const ReviewsRender = (props,items) => {
	const item = props.route.params	
	const reviews = item.reviews
	return(
		<Card title="Rating & Reviews" containerStyle={{width:WIDTH,marginLeft:0,flex:1}}>
			<View style={{paddingBottom:10,flexDirection:'row',justifyContent:'space-around',flex:1}}>
				<View style={{borderRightWidth:1.5,borderRightColor:'rgba(0,0,0,.2)',flex:.5,alignItems:'center',justifyContent:'center'}}>
					<View style={{flexDirection:'row',alignItems:'center'}}>
						<Text style={{fontSize:32,paddingRight:10}}>4.3</Text>
						<Icons name="star-outline" size={35} />
					</View>
					<Caption>Based on {reviews.length} Reviews</Caption>
				</View>
				<View style={{flex:.5}}>
					{items.payload.map(i => (
                        <RatingBar {...i}/>
                    ))}
				</View>
			</View>
			<Divider/>
			<FlatList
				data={reviews}
				renderItem={item => reviewRenderer(item)}
				key={item => item.id}
			/>
			<Button title="Read All Reviews" type='outline' containerStyle={{paddingVertical:10}} />
		</Card>
	)
}
const renderItem = ({item},props) => {
	switch(item.type){
		case 'TopImages':
			return Top(props,item)
		case 'TopContent':
			return  Topcontent(props)
		case 'Options':
			return OptionsRender(props)
		case 'delivery':
			return DeliveryRender(props)
		case 'Q_A':
			return renderQuestionAnswer(item,props)
		case 'details':
			return Detailsrender(item,props)
		case 'Reviews':
			return ReviewsRender(props,item)

	}
}

const App = (props) => {

	return(
		<View style={{flex:1}}>
			<View style={{flex:.99}}>
			<FlatList
				data={Data}
				renderItem={item => renderItem(item,props)}
				key={item => item.id}
			/>
			<Fab navigation={props.navigation} />
			</View>
			<View style={{flex:.07,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
				<View style={{flex:.5}}>
					<Button title="Add To Cart" icon={{
						name:'shopping-cart',
						size:20,
						color:'white'
					}} raised containerStyle={{flex:1}} buttonStyle={{flex:1}}/>
				</View>
				<View style={{flex:.5}}>
					<Button title="Buy Now" type="outline" containerStyle={{flex:1}} buttonStyle={{flex:1}} raised />
				</View>
			</View>
		</View>
	)
}
export default App