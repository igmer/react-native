import React, {Component} from 'react';

import {Card, Text} from "react-native-elements";

export default class Restaurant extends Component {
	render () {
		const {editRestaurant, restaurant} = this.props;
		return (
			<Card
				title={restaurant.name}

			>


				<Text style={{marginBottom: 10, marginTop: 10}}>
					{restaurant.description}
				</Text>
			</Card>
		)
	}
}