import React from 'react';
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-dynamic-vector-icons'
import Header from '../components/header'
import detail from './shopDetail'
import ShopList from '../pages/ShopList/index.js'

const stack = createStackNavigator()

export default class App extends React.Component {
    render() {
        return (
                <stack.Navigator>
                    <stack.Screen name="ShopList" component={ShopList}/>
                    <stack.Screen name="detail" component={detail}/>
                </stack.Navigator>
        )
    }
}
