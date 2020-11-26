import React from 'react';
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabnavigator from './tab'
import Icon from 'react-native-dynamic-vector-icons'
import Header from '../components/header'
import Cart from '../pages/cart'
import shopCategory from './shopCategory'
import product from '../pages/product'
import Liked from '../pages/Liked'
import Settings from '../pages/Profile_Settings'
import Notifications from '../pages/Notifications'
import Payment from '../pages/Payment'



const stack = createStackNavigator()
export default class App extends React.Component {
    render() {
        return (
                <stack.Navigator>
                    <stack.Screen name="hometabnavigator" component={Tabnavigator} options={{
                        header : ({ scene, previous, navigation }) => {
                            const { options } = scene.descriptor;
                            return (
                                <Header scene={scene} p={false} previous={previous} navigation={navigation} />
                            )
                        }
                    }}/>
                    <stack.Screen name="cart" component={Cart} options={{
                        header : ({ scene, previous, navigation }) => {
                            const { options } = scene.descriptor;
                            return (
                                <Header scene={scene} p={true} previous={previous} navigation={navigation} />
                            )
                        }
                    }}/>
                    <stack.Screen name="shopCategory" component={shopCategory} options={{headerShown:false}} />
                    <stack.Screen name="product" component={product} options={{
                        header : ({ scene, previous, navigation }) => {
                            const { options } = scene.descriptor;
                            return (
                                <Header scene={scene} p={true} previous={previous} navigation={navigation} />
                            )
                        }
                    }}/>
                    <stack.Screen name="Liked" component={Liked} options={{
                        header : ({ scene, previous, navigation }) => {
                            const { options } = scene.descriptor;
                            return (
                                <Header scene={scene} p={true} previous={previous} navigation={navigation} />
                            )
                        }
                    }}/>
                    <stack.Screen name="Settings" component={Settings} options={{
                        header : ({ scene, previous, navigation }) => {
                            const { options } = scene.descriptor;
                            return (
                                <Header scene={scene} p={true} previous={previous} navigation={navigation} />
                            )
                        }
                    }}/>
                    <stack.Screen name="Notifications" component={Notifications} options={{
                        header : ({ scene, previous, navigation }) => {
                            const { options } = scene.descriptor;
                            return (
                                <Header scene={scene} p={true} previous={previous} navigation={navigation} />
                            )
                        }
                    }}/>
                    <stack.Screen name="Payment" component={Payment} options={{
                        header : ({ scene, previous, navigation }) => {
                            const { options } = scene.descriptor;
                            return (
                                <Header scene={scene} p={true} previous={previous} navigation={navigation} />
                            )
                        }
                    }}/>                    
                </stack.Navigator>
        )
    }
}
