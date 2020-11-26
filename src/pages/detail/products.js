import React,{useState} from 'react'
import {View,Text,Button,FlatList,Dimensions} from 'react-native'
import { Card, Rating } from 'react-native-elements'
import {Title,Searchbar} from 'react-native-paper'
import Component from '../../components/product'
import FastImage from 'react-native-fast-image'
import Fab from '../../components/fabBar'


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const reviews = [
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
]

const App = (props) => {
	const list = [
    	{
    	  id: '1',
    	  name: "Alien Ware",
    	  category: "Laptop",
    	  seller: "Dada",
    	  price: "500000000",
          options:[
            {name:'RAM',options:['2GB','3GB']},
            {name:'color',options:['blue','red','black']},
            {name:'storage',options:['128GB','60GB','22GB']},

          ],
    	  logo: require('../../pages/cart/cart_t2.jpeg'),
          reviews:reviews,
    	},
    	{
    	  id: '2',
    	  name: "Segway",
    	  category: "Laptop",
    	  seller: "Dada",
          options:[
            {name:'RAM',options:['2GB','3GB']},
            {name:'color',options:['blue','red','black']}
          ],
    	  price: "500000000",
    	  logo: require('../../pages/cart/cart_t.jpeg'),
          reviews:reviews,
    	},
    	{
    	  id: '3',
    	  name: "Spray",
    	  category: "Laptop",
    	  seller: "Dada",
          options:[
            {name:'RAM',options:['2GB','3GB']},
            {name:'color',options:['blue','red','black']}
          ],
    	  price: "500000000",
    	  logo: require('../../pages/cart/cart_t1.jpeg'),
          reviews:reviews,
    	},
    	{
    	  id: '4',
    	  name: "Alien Ware",
    	  category: "Laptop",
    	  seller: "Dada",
          options:[
            {name:'RAM',options:['2GB','3GB']},
            {name:'color',options:['blue','red','black']}
          ],
    	  price: "500000000",
    	  logo: require('../../pages/cart/cart_t2.jpeg'),
          reviews:reviews,
    	},
    	{
    	  id: '5',
    	  name: "Segway",
    	  category: "Laptop",
    	  seller: "Dada",
          options:[
            {name:'RAM',options:['2gb','3gb']},
            {name:'color',options:['blue','red','black']}
          ],
    	  price: "500000000",
    	  logo: require('../../pages/cart/cart_t.jpeg'),
          reviews:reviews,
    	},
    	{
    	  id: '6',
    	  name: "Spray",
    	  category: "Laptop",
    	  seller: "Dada",
          options:[
            {name:'RAM',options:['2gb','3gb']},
            {name:'color',options:['blue','red','black']}
          ],
    	  price: "500000000",
    	  logo: require('../../pages/cart/cart_t1.jpeg'),
          reviews:reviews,
    	},

	]
	return(
		<View style={{flex:1}}>
		<Searchbar style={{marginVertical:10}}/>
		<FlatList
			numColumns={2}
			data={list}
        	keyExtractor={item => item.id}
			renderItem={(item) => Component(item,props)}
		/>
        <Fab navigation={props.navigation} />
		</View>
	)
}
export default App