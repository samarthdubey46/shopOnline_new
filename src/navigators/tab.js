import React from 'react';
import { View, Text, Button } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-dynamic-vector-icons'
import category from '../pages/category/index'
import home from '../pages/home/index'
import profile from '../pages/profile/index'
import Theme from '../constants/color_theme'


const navigator = createMaterialBottomTabNavigator()


export default class App extends React.Component {

    render() {
        return (
            <navigator.Navigator initialRouteName="home" backBehavior="initialRoute" shifting={true}  activeColor="#1f8bff" inactiveColor="rgba(255,255,255,1)" barStyle={{backgroundColor:'rgba(0,0,0,.7)'}}>
                <navigator.Screen component={home} name="home" options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Icon name="home" type="FontAwesome" color={color} size={25} />
                    )
                }}  />
                <navigator.Screen component={category} name="category" options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Icon name="ios-list-outline" type="Ionicons" color={color} size={25} />
                    )
                }}/>
                <navigator.Screen component={profile} name="profile"options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Icon name="person" type="Fontisto" color={color} size={25} />
                    )
                }}/>
                
            </navigator.Navigator>
        )
    }
}