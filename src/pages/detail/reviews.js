import React,{useState} from 'react'
import {View,Text,StyleSheet,FlatList,Dimensions,TouchableOpacity} from 'react-native'
import {Rating,Button,Avatar,ListItem} from 'react-native-elements'
import {Title,Card,Caption,Divider,Drawer,DataTable} from 'react-native-paper'
import SlidingImages from '../../components/SlidingImages'
import FastImage from 'react-native-fast-image'
import Icons from 'react-native-vector-icons/Ionicons'
import RatingBar from '../../components/ratingBar'
import Fab from '../../components/fabBar'



const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
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
		</View>

	)
}
const ratings = [
    {text:'5',color:"#04d148" , value:18},
    {text:'4',color:"#05ed2f" , value:16},
    {text:'3',color:"#47ff0a" , value:15},
    {text:'2',color:"#f7f705" , value:10},
    {text:'1',color:"#e00000" , value:5},
]
const a = [
    {
        id:'1',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        name: 'Terrific',
        rating: 4.5,
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, elit vitae sollicitudin malesuada, felis augue',
        photos: []

    },
    {
        id:'2',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        name: 'Good',
        rating: 4.5,
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, elit vitae sollicitudin malesuada, felis augue',
        photos: [
            require('../../pages/cart/cart_t2.jpeg'),
            require('../../pages/cart/cart_t2.jpeg'),
            require('../../pages/cart/cart_t2.jpeg'),
        ]

    },
    {
        id:'3',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        name: 'Bad',
        rating: 1.5,
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, elit vitae sollicitudin malesuada, felis augue',
        photos: []

    },
    {
        id:'4',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        name: 'Best',
        rating: 4.5,
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, elit vitae sollicitudin malesuada, felis augue',
        photos: []

    },
    {
        id:'5',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        name: 'Best',
        rating: 4.5,
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, elit vitae sollicitudin malesuada, felis augue',
        photos: []

    },
    {
        id:'6',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        name: 'Best',
        rating: 4.5,
        Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, elit vitae sollicitudin malesuada, felis augue',
        photos: []

    },
]

// Reviews To Fetched from database from shop id
const Top = (props) => {
	return(	
		<View>
		<Card elevation={10} >
		    <Card.Title title="Reviews" />
			<Card.Content style={{flexDirection:'row'}} >
				<View style={{borderRightWidth:1.5,borderRightColor:'rgba(0,0,0,.2)',flex:.5,alignItems:'center',justifyContent:'center'}}>
					<View style={{flexDirection:'row',alignItems:'center'}}>
						<Text style={{fontSize:32,paddingRight:10}}>4.3</Text>
						<Icons name="star-outline" size={35} />
					</View>
					<Caption>Based on {a.length} Reviews</Caption>
				</View>
				<View style={{flex:.5}}>
					{ratings.map(i => (
                        <RatingBar key={i.text} {...i}/>
                    ))}
				</View>

			</Card.Content>
		</Card>
		<Divider/>

		</View>
	)
}
const Bottom = (props) => {
	return(
		<Card>
			<Card.Content>

				<FlatList
					data={a}
					keyExtractor={(item,index) => String(index)}
					renderItem={item => reviewRenderer(item)}
				/>
			</Card.Content>
		</Card>
	)
}
const datas = [
	{type:'Top',},
	{type:'Bottom'},

]
const main = ({item}) => {
	if(item.type === 'Top'){
		return Top(item)
	}
	return Bottom(item)

}
const App = (props) => (
	<View>
		<FlatList
			data={datas}
			renderItem={item => main(item) }
		/>
		<Fab navigation={props.navigation} />
	</View>
)
export default App