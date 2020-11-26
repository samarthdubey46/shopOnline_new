import React,{useState,useEffect} from 'react';
import {Dimensions,FlatList,Image,View,StyleSheet,Text,InteractionManager,TouchableOpacity,Button} from 'react-native'
import {Avatar,Card,ListItem} from 'react-native-elements'
import { List,Divider,ActivityIndicator,Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image'
import Fab from '../../components/fabBar'


const WIDTH = Dimensions.get('window').width

const Category = (props) => {
	const [expanded1,setex1] = useState(false)
	const [expanded2,setex2] = useState(false)
	const [expanded3,setex3] = useState(false)
	const [expanded4,setex4] = useState(false)
	const Data = [
		{id:'1',source:require('./shirt.png'),text:"Clothing",expanded:expanded1,set:setex1,children:[
			"Mens Wear",
			"Womens Wear",
			"Children Wear",
		]},
		{id:'2',source:require('./e.png'),text:"Electronics",expanded:expanded2,set:setex2,children:[
			"Mobile Phones",
			"Photography"
		]},
		{id:'3',source:require('./food.png'),text:"Food",expanded:expanded3,set:setex3,children:[
			"Cafe",
			"Resturants"
		]},
	]
	const [isready,changeready] = useState(false)
  	useEffect(() => {
  	     InteractionManager.runAfterInteractions(() => {
  	      changeready(true)
  	     })
  	},[])
	const keyExtractor = (item, index) => index.toString()
	const Imagerender = (props) => (
		<FastImage
			style={{width:25,height:22,marginRight:10,marginLeft:10,opacity:.6}}
			source={props.source}
		/>
	)
	
	const renderItem = ({item,index}) => (
			<List.Accordion
    		    title={item.text}
    		    key={index}
				titleStyle={{fontSize:18,fontWeight:'900'}}
				style={{backgroundColor:'white',marginVertical:10}}
				expanded={item.expanded}
				onPress={() => item.set(!item.expanded)}
    		    left={props => Imagerender(item)}>
				{item.children.map((items,indexs) => (
					<TouchableOpacity key={indexs} onPress={() => props.navigation.navigate('shopCategory')} style={{flexDirection:'row',borderBottomWidth:1,flex:1,borderBottomColor:'rgba(0,0,0,.1)',marginVertical:5,paddingVertical:10,backgroundColor:'white',justifyContent:'space-between'}}>
						<Text style={{fontSize:18,fontStyle:'italic',opacity:.7}}>{items}</Text>
						<Text style={{paddingRight:10}}> > </Text>
					</TouchableOpacity>
				))}
			</List.Accordion>
	)
	if(!isready){
      return (
        <ActivityIndicator size='large' style={{flex:1,justifycontent:'center',alignItems:'center'}} animating={true} color={Colors.blue300} />
        
      )
  } 
  return(
       <View style={styles.container}>
   			<FlatList
   				data={Data}
   				renderItem={renderItem}
   				keyExtractor={keyExtractor}
   			/>
   			<Fab navigation={props.navigation} />
       </View>
        )
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white'
	}	
})
export default Category
