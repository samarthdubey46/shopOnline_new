import React from 'react';
import {Dimensions,View,Text,Button,Image,StyleSheet,FlatList,TouchableWithoutFeedback} from 'react-native'
import Carousel, { PaginationLight,Pagination } from 'react-native-x-carousel';
import FastImage from 'react-native-fast-image'


const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const renderItem = (data,props) => {
		const height = props.dark ? HEIGHT / (props.height - 1) : HEIGHT / props.height 
		const height1 = props.dark ? HEIGHT / (props.height - .8) : HEIGHT / props.height
		return(
		<View  key={data.id} style={{height:height1,backgroundColor:'white',flex:1,alignItems:'center',justifyContent:'center'}}>
		<FastImage
			source={data.photo}
			style={{height:height,width:WIDTH}}
    	    resizeMode={FastImage.resizeMode.contain}
		/>
		</View>)
}
const pagination = (props) => (
	<View>
		{Pagination(props)}
	</View>
)
const App = (props) => {
	const sp = {
		autoplay : props.dark ? false : true	
	} 
	return(

		<Carousel
		  	pagination={ props.dark ?  Pagination : PaginationLight}
		  	renderItem={(data) => renderItem(data,props)}
		  	data={props.data}
  			loop={true}
  			{...sp}
  			autoplayInterval={3700}
		/>
	)

}
export default App
