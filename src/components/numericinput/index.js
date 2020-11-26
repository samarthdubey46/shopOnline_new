import React,{useState} from 'react'
import Icon from 'react-native-dynamic-vector-icons'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import {Button } from 'react-native-elements';
// import { TextInput } from 'react-native-paper';
const TotalWidth = 90
const inputWidth = TotalWidth * 0.4
const App = (props) => { 
		function isNumeric(value) {
    		return /^\d+$/.test(value);
		}
		const [value,changevalue] = useState('1')
		const change = (text) => {
			if(isNumeric(text)){
				changevalue(text)
			}
		}
		const onChange = (action) => {
			if(action == "inc"){
				changevalue(String(parseInt(value) + 1))
			}
			if(action == "dec"){
				changevalue(String(parseInt(value) - 1))
			}
		}
		return(
			<View style={{flex:1,backgroundColor:'white',flexDirection:'row',marginRight:5}}>
				<TouchableOpacity onPress={() => onChange("dec")} style={styles.left}>
					<Icon
						name="md-remove"
						type="Ionicons"
					/>
				</TouchableOpacity>
				<TextInput
					default="1"
					value={value}
					onChangeText={text => change(text)}
					keyboardType='numeric'
					editable={true}
					style={styles.inputPlusMinus}
				/>
				<TouchableOpacity  onPress={() => onChange('inc')} style={styles.left}>
					<Icon
						name="md-add"
						type="Ionicons"
					/>
				</TouchableOpacity>
			</View>

		)
}
const totalHeight = TotalWidth * 0.4
const fontSize = totalHeight * 0.38
const styles = StyleSheet.create({
    inputPlusMinus: {
    	textAlign: 'center',
    	padding: 0,

    	width: inputWidth,
    	height: totalHeight,
    	fontSize: fontSize,
    	color: 'black',
    	borderWidth: .2,
    	borderColor: 'rgba(0,0,0,.2)'
    },
    left:{
        zIndex: -1,
        left: 0,
        height: totalHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: (TotalWidth - inputWidth) / 2,
        borderWidth: .2,
    	borderColor: 'rgba(0,0,0,.2)'
    }
})
export default App