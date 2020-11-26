import React,{useState,useEffect,useCallback} from 'react'
import {TouchableOpacity,Dimensions,View,Text,Button,StyleSheet,Image} from 'react-native'
import {Card,Avatar} from 'react-native-elements'
import Icon from 'react-native-dynamic-vector-icons'

let a = "test"
const width = Dimensions.get('window').width
export default class App extends React.PureComponent{
	render(){
		return(
			<TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.route) } style={{alignItems:'center',justifyContent:'center'}}>
				<Icon style={{paddingRight:5}} name={this.props.item.name}  type={this.props.item.type} />
				<Text style={{paddingRight:0}} >{this.props.item.text}</Text>
			</TouchableOpacity>
		)
	}
}
