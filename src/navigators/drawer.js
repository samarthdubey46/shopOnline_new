import React,{useState} from 'react'
import {View,Text,Button} from 'react-native'
import {Card} from 'react-native-elements'
import { createDrawerNavigator,  DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import category from '../pages/category/index'


const Drawer = createDrawerNavigator()
export default class App extends React.Component{
	render(){
		return(
			<NavigationContainer>
				<Drawer.Navigator>
		        	<Drawer.Screen name="category" component={category} />
				</Drawer.Navigator>
			</NavigationContainer>

		)
	}
}