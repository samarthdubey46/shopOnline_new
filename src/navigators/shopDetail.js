import * as React from 'react'
import { View, Text, Image, ScrollView, Button, TouchableOpacity, SafeAreaView,Dimensions } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import overview from '../pages/detail/index'
import products from '../pages/detail/products'
import reviews from '../pages/detail/reviews'



const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const tab = createBottomTabNavigator()

// const tab = createMaterialBottomTabNavigator()
export default class TabNavigator extends React.PureComponent{
 render(){
     return(
         <tab.Navigator tabBarOptions={{
              labelStyle:{
              fontSize:16, marginTop:-0,
              alignSelf:'center',
              flex:.7
              },
              style:{
              	justifyContent:'center',
              	alignItems:'center',
              	backgroundColor:'black'
              },
              activeTintColor:'#1f8bff',
              inactiveTintColor:'rgba(255,255,255,.7)'
          }}
              >

             <tab.Screen name="overview" component={overview} initialParams={this.props.route.params} />
             <tab.Screen name="products" component={products}  />
             <tab.Screen name="reviews" component={reviews} initialParams={this.props.route.params} />

         </tab.Navigator>
     )
 }
}

