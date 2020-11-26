import React,{useState,useEffect,useCallback} from 'react'
import {TouchableOpacity,Dimensions,View,Text,Button,StyleSheet,Image} from 'react-native'
import {Card,Avatar} from 'react-native-elements'
import Icon from 'react-native-dynamic-vector-icons'

let a = "test"
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default class App extends React.PureComponent{
	render(){
		return(
			<TouchableOpacity onPress={() => a="t" } style={{flexDirection:'row',marginTop:height / 35,marginLeft:10,paddingBottom:5}}>
				<Icon size={ this.props.size ? this.props.size :22} style={{paddingRight:5}} name={this.props.item.name}  type={this.props.item.type} />
				<Text style={{paddingRight:0,fontSize:14,paddingLeft:2}} >{this.props.item.text}</Text>
			</TouchableOpacity>
		)
	}
}
