import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {Card, Rating, Text} from "react-native-elements";

export default class Comment extends Component {
	render () {
		const {comment} = this.props;
		return (
			<Card title={comment.comment}>
				<Text
					style={styles.rating}

				> $ {comment.rating} </Text>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	rating: {
		alignItems: 'center'
	}
});