import React,{useState,useEffect} from 'react'
import {View,Text,Button,FlatList,StyleSheet,TouchableOpacity,ScrollView,Dimensions,InteractionManager} from 'react-native'
import  {Colors,Divider,ActivityIndicator} from 'react-native-paper'
import { Card} from 'react-native-elements'
import Item from '../../components/cartComponent'
import Fab from '../../components/fabBar'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const list = [
    {
      id: '1',
      name: "Alien Ware",
      category: "Laptop",
      seller: "Dada",
      price: "500000000",
      logo: require('../../pages/cart/cart_t2.jpeg')
    },
    {
      id: '2',
      name: "Segway",
      category: "HoverBoard",
      seller: "Dada",
      price: "500",
      logo: require('./cart_t.jpeg')
    },
    {
      id: '3',
      name: "Segway",
      category: "HoverBoard",
      seller: "Dada",
      price: "500",
      logo: require('./cart_t.jpeg')
    },
    {
      id: '4',
      name: "Segway",
      category: "HoverBoard",
      seller: "Dada",
      price: "500",
      logo: require('./cart_t.jpeg')
    },
]


const MyComponent = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sum, changeSum] = useState(0);
  const [isready,changeready] = useState(false)
  useEffect(() => {
       InteractionManager.runAfterInteractions(() => {
        changeready(true)
       })
  },[])
  const onChangeSearch = query => setSearchQuery(query);
  if(!isready){
      return (
        <ActivityIndicator size='large' style={{flex:1,justifycontent:'center',alignItems:'center'}} animating={true} color={Colors.blue300} />
        
      )
  } 
  return (
  	<View style={{flex:1}}>
      <View style={{flex:.95,marginTop:10}}>
      	<FlatList
      		data={list}
        	renderItem={(item) => <Item item={item} id={item.id} last={list.length} />}
        	keyExtractor={item => item.id}
      	/>
      <Fab navigation={props.navigation} />
      </View>
      <View style={{flexDirection:'row',flex:.12,backgroundColor:'white',justifycontent:'space-around',borderWidth:.2,borderColor:'rgba(0,0,0,.3)'}}>
        <View style={{flex:.5,backgroundColor:'white',marginLeft:20,justifycontent:'space-between'}}>
            <Text style={{fontSize:26,fontFamily:'normal',fontStyle:'italic'}}>₹20,000 </Text>
            <TouchableOpacity>
              <Text style={{fontStyle:'normal',fontSize:16,color:'#0894ff',marginTop:0}}>View price Details</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex:.5,backgroundColor:'white',justifyContent:'center',alignItems:'center',padding:10}}>
          <Button
            title="Place Order"
          />
        </View>
      </View>
    </View>

  );
};

export default MyComponent;
