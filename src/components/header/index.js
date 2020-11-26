import React from 'react'
import {View,Text,TextInput} from 'react-native'
import Icon from 'react-native-dynamic-vector-icons'
import {Appbar,Searchbar} from 'react-native-paper'



export default class App extends React.Component{
	state={
		search_baropen : true,
		search_query : '',
	}
	
	_goBack = () => this.props.navigation.goBack();
	_handleSearch = () => console.log(this.props);
	_handleMore = () => this.props.navigation.navigate('cart');
	_openDrawer = () => this.props.navigation.openDrawer();
	back = () => {
		if(this.props.p){
			return(
			<Appbar.BackAction onPress={this._goBack} />)
		}else{
			return(
			<Appbar.Action icon="format-list-bulleted" onPress={this._openDrawer} />)
		}

	}  
	render(){
		return(
		<Appbar.Header style={{backgroundColor:'white'}}>
      			{this.back()}
     			<Appbar.Content title="HomeTab"/>
      			{!this.props.p && (
  				<View style={{flexDirection:'row'}}>
  					<Appbar.Action icon="magnify" onPress={this._handleSearch} />
      				<Appbar.Action icon="cart" onPress={this._handleMore} />
      			</View>
      			)}
   	 </Appbar.Header>
		)
	}

}
