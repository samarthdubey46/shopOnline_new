import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { Card, Avatar, Rating, Divider } from 'react-native-elements'
import NumericInput from '../numericinput'
import { Button } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
export default class App extends React.PureComponent {

	state = {
		last: this.props.last - 1 === this.props.item.index
	}
	onQtyChange = value => {
		if (value > 0) {
			this.setState({ value })
		}
	}

	render() {
		return (
			<View style={{ paddingBottom: 10, flex: 1 }}>
				<Card containerStyle={{ flex: .1 }}>
					<View style={{ flex: .9, flexDirection: 'row', backgroundColor: 'white', marginBottom: 10 }}>
						<View style={{ flex: 1 }}>
							<Avatar
								size={100}
								rounded
								source={this.props.item.item.logo}
							/>
							<View style={styles.Qtyinput}>
								<NumericInput
									totalWidth={80}
									value={this.state.value}
									onChange={this.onQtyChange}
									minValue={0}
									separatorWidth={.2}


								/>
							</View>
						</View>
						<View style={styles.TextContainer}>
							<View style={styles.Title}>
								<Text style={{ fontSize: 18 }}> {this.props.item.item.name}</Text>
							</View>
							<View style={styles.subTitle}>
								<Text style={{ fontSize: 15, opacity: 1 }}> {this.props.item.item.category}</Text>
							</View>
							<View style={styles.RatingView}>
								<Rating imageSize={18} readonly startingValue={3} style={styles.RatingStyle} />
							</View>
							<View style={styles.Price}>
								<Text style={{ fontSize: 20, opacity: 1 }}> ₹{this.props.item.item.price}</Text>
							</View>
						</View>
					</View>
					<Divider />
					<View style={styles.BottomView}>
						<Button style={{ flex: .5 }} icon="archive-arrow-down-outline" mode='outline' onPress={() => console.log(this.state)} > Buy now </Button>
						<Divider style={{ height: 30, width: 1, alignSelf: 'flex-end' }} />
						<Button icon="delete-outline" mode='outline' style={{ flex: .5 }} > Remove</Button>
					</View>
				</Card>
				{this.state.last && (
					<Card>
						<View style={{ flex: 1, backgroundColor: 'white' }}>
							<View style={styles.CardHeader}>
								<Text style={{ fontSize: 20, opacity: .7 }}>Price Details</Text>
							</View>
							<Divider />
							<View style={styles.cardBottomUp}>
								<View style={styles.cardDetails}>
									<Text style={{ fontSize: 16, opacity: .8, fontStyle: 'normal' }}> price({this.props.last} items)</Text>
									<Text style={{ fontSize: 16, opacity: .7, fontStyle: 'normal' }}>₹20,000 </Text>
								</View>
								<View style={styles.cardDetails}>
									<Text style={{ fontSize: 16, opacity: .8, fontStyle: 'normal' }}> Delivery Fee</Text>
									<Text style={{ fontSize: 16, opacity: .7, fontStyle: 'normal', color: 'green' }}>FREE</Text>
								</View>
								<Divider />
								<View style={styles.cardDetails1}>
									<Text style={{ fontSize: 19, opacity: .8, fontWeight: 'bold' }}> Total Amount</Text>
									<Text style={{ fontSize: 19, opacity: .7, fontWeight: 'bold' }}>₹20,000</Text>
								</View>

							</View>

						</View>
					</Card>
				)}
			</View>

		)
	}
}


const styles = StyleSheet.create({
	cardBottomUp: {
		flex: 1,
		marginTop: 5,
		marginBottom: 10
		// backgroundColor:'red'
	},
	cardDetails: {
		marginBottom: 12,
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row',
		// backgroundColor:'red'
	},
	cardDetails1: {
		marginTop: 5,
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row',
		// backgroundColor:'red'
	},
	CardHeader: {
		flex: .1,
		// backgroundColor:'blue',
		marginBottom: 6
	},
	BottomView: {
		flex: 2,
		// backgroundColor:'red',
		flexDirection: 'row',
		justifyContent: 'space-between',
		// alignItems:'baseline',
	},
	TextContainer: {
		flex: 1.5,
		margin: 10,
		// backgroundColor:'black'

	},
	Title: {
		flex: .05,
		// backgroundColor:'red'
	},
	subTitle: {
		flex: .02,
		// backgroundColor:'red'
	},
	RatingView: {
		flex: .1,
		// backgroundColor:'red',
		justifyContent: 'flex-start'
	},
	RatingStyle: {
		flex: 1,
		// backgroundColor:'red',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	Price: {
		// width:'70%',
		flex: 1,
		// backgroundColor:'red'

	},
	Qtyinput: {
		// width:'40%',
		flex: 1,
		// alignItems:'center',
		// justifyContent:'center',
		padding: 10,
		paddingHorizontal: 10,
		// backgroundColor:'red'		
	}
})




