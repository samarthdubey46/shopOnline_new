import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {View,Text,Button} from 'react-native'
import Main from './src/navigators/outstack'
import Reducer from './src/redux/reducers/index'
import { createDrawerNavigator,  DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './src/pages/drawerContent/index.js'

const Drawer = createDrawerNavigator()
const store = createStore(Reducer)

export default class App extends React.Component{
    render(){
        return(
        	<Provider store={store}>
                <NavigationContainer>
                    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
                        <Drawer.Screen name="main" component={Main} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </Provider>
        )
   }
}

// <Button title="asd" onPress={() => store.dispatch({type:"Test1"})} />
