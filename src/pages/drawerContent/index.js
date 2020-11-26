import React from 'react';
import {Text,View, StyleSheet } from 'react-native';
import {Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch,Divider} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer'

import Icon from 'react-native-dynamic-vector-icons'


const App = (props) => {
        const middleSectionContents = (number,text) => (
            <View style={styles.middleSectionContent}>
                <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>{number}</Text>
                <Caption>{text}</Caption>
            </View>
        )
        const {navigation} = props
        const homeNavigate = (props) => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'hometabnavigator' }],
            })
            navigation.closeDrawer()
        }
        return(
            <View style={{flex:1}}>
                <DrawerContentScrollView style={{backgroundColor:'white',flex:1}}>
                    <View style={{flex:1}}>
                        <View style={styles.topSection}>
                            <View style={styles.topLeftSection}>
                                <Avatar.Image
                                    source={{
                                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}
                                  size={100}
                                />
                            </View>
                            <View style={styles.topRightSection}>
                                <Text style={{alignSelf:'center',fontSize:26,fontWeight:'bold'}}> Samarth </Text>
                                <Caption style={{alignSelf:'center'}}> Customer </Caption>
                            </View>
                        </View>
			         <View style={styles.middleSection}>
                                {middleSectionContents('10','Ordered')}
                                <Divider style={{width:1,height:50}}/>
                                {middleSectionContents('0','Pending')}
			             </View>
                         <View style={styles.BottomContainer}>
                            <DrawerItem
                                style={{paddingTop:10}}  
                                icon={({color, size}) => (
                                    <Icon
                                    name="home-outline"
                                    type="Ionicons" 
                                    color='black'
                                    style={{opacity:.7}}
                                    size={size}
                                    />
                                )}
                                label="Home"
                                onPress={() => homeNavigate('s')}
                                labelStyle={{color:'black',fontSize:15,opacity:.7}}

                            />
                                <DrawerItem 
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="cart" 
                                        type="Ionicons"
                                        color='black'
                                        size={size}
                                        style={{opacity:.7}}
                                        />
                                    )}
                                    label="Cart"
                                    onPress={() => navigation.navigate('cart')}                                    
                                    labelStyle={{color:'black',fontSize:15,opacity:.7}}
                                />
                            {/*<DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="product-hunt" 
                                    type="FontAwesome"
                                    color='black'
                                    style={{opacity:.7}}
                                    size={size}
                                    />
                                )}
                                label="Shop By Products"
                                onPress={() => navigation.navigate('category',{came:true})}
                                labelStyle={{color:'black',fontSize:15,opacity:.7}}

                            />*/}
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="shop" 
                                    type="Entypo"
                                    color='black'
                                    style={{opacity:.7}}
                                    size={size}
                                    />
                                )}
                                style={{paddingBottom:10}}
                                label="Shop By Shops"
                                labelStyle={{color:'black',fontSize:15,opacity:.7}}

                            />
                            
                            <Drawer.Section title="Profile">
                                <DrawerItem 
                                    style={{paddingTop:10}}
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="heart" 
                                        type="Feather"
                                        color='black'
                                        size={size}
                                        style={{opacity:.7}}
                                        />
                                    )}
                                    label="Liked"
                                    onPress={() => navigation.navigate('Liked')}
                                    labelStyle={{color:'black',fontSize:15,opacity:.7}}
                                />
                                
                                <DrawerItem 
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="settings" 
                                        type="Ionicons"
                                        color='black'
                                        size={size}
                                        style={{opacity:.7}}
                                        />
                                    )}
                                    onPress={() => navigation.navigate('Settings')}
                                    label="Settings"
                                    labelStyle={{color:'black',fontSize:15,opacity:.7}}
                                />
                                <DrawerItem 
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="power" 
                                        type="Feather"
                                        color='black'
                                        size={size}
                                        style={{opacity:.7}}
                                        />
                                    )}
                                    label="Sign out"
                                    labelStyle={{color:'black',fontSize:15,opacity:.7}}
                                />
                            </Drawer.Section>
                         </View>
                    </View>
                </DrawerContentScrollView> 
            </View>
        )
}
const styles = StyleSheet.create({
     preference: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    BottomContainer:{
        flex:.1,
        // backgroundColor:'blue',
    },
    middleSectionContent:{
        flex:.5,
        // backgroundColor:'red',
        alignItems:'center'
    },
    middleSection:{
        flex:1,
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-around',
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,.1)',
        marginBottom:5,
    },
    middleSectionContent1:{
        flex:.5,
        // backgroundColor:'black'
    },
    topSection:{
        flex:1,
        // backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingHorizontal:10,
        paddingBottom:25,
        paddingTop:18,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,.2)'
    },
    topLeftSection:{
        flex:.4,
        backgroundColor:'white'
    },
    topRightSection:{
        justifyContent:'center',
        flex:.5,
    },
    
})
export default App
