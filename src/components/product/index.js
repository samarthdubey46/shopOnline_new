import React,{useState} from 'react'
import {View,Text,Button,FlatList,Dimensions,TouchableOpacity} from 'react-native'
import { Card, Rating } from 'react-native-elements'
import FastImage from 'react-native-fast-image'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


const App = (props,{navigation}) => {
	const item = props.item
	return(
		<Card containerStyle={{width:(WIDTH) / 2,marginRight:0,marginTop:0,marginLeft:0,flex:1,borderWidth:.5,backgroundColor:'white'}}>
			<View style={{flex:1,borderWidth:0,}}>
				<TouchableOpacity onPress={() =>  navigation.navigate('product',{...item})} style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
					<FastImage
    				    style={{ width: (WIDTH) / 2, height: 100 }}
    				    source={item.logo}
    				    resizeMode={FastImage.resizeMode.contain}
    				/>
				</TouchableOpacity>
				<View style={{flex:1,paddingVertical:15,paddingHorizontal:6}}>
					<Text style={{ fontSize: 20, alignSelf: 'flex-start' }}>{item.name}</Text>
					<Rating
                        imageSize={14}
                        readonly
                        startingValue={3.5}
                        style={{ marginBottom: 0, alignSelf: 'flex-start', marginLeft: 0 }}
                    />
                    <Text style={{fontSize:15}}>₹{item.price}</Text>
                    <Text style={{ opacity: .5, fontSize: 16, alignSelf: 'flex-start' }}>{item.category}</Text>
				</View>
			</View>
		</Card>

	)
}
export default App