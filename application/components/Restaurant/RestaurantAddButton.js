import React, {Component} from 'react';
import AppButton from "../AppButton";
import {StyleSheet, View} from 'react-native';

export default class RestaurantAddButton extends Component {
	render () {
		const {addRestaurant} = this.props;
		return (
			<View style={styles.buttonContainer}>
				<AppButton titleStyle={{ marginLeft: 20 }}
					bgColor="rgba(255, 38, 74, 0.6)"
					title="Crear solicitud de trabajo "
					action={addRestaurant}
					iconName="plus"
					iconSize={30}
					iconColor="#fff"
					setWidth={true}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		position: 'absolute',
		alignSelf:'flex-end',
		bottom: 0,
	}
});