import React, {Component} from 'react';
import AppButton from "../AppButton";
import {options, Comment} from '../../forms/comment';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import {Card} from "react-native-elements";
import {View} from "react-native";
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';
import { NavigationActions } from 'react-navigation';

export default class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: {
				comment: '',
				rating: 1
			}
		};
	}
	goHome () {
		const navigateAction = NavigationActions.navigate({
			routeName: 'ListRestaurants',
		});
		this.props.navigation.dispatch(navigateAction);

	}

	addComment () {
		const validate = this.refs.form.getValue();
		if(validate) {
			let data = {};
			let comment = Object.assign({}, validate);
			let ref = firebase.database().ref().child('comments');
			const key = ref.push().key;

			data[`${this.props.restaurantId}/${key}`] = comment;

			ref.update(data).then(() => {
				this.setState((prevState, props) => {
					return {
						comment: {
							comment: '',
							rating: 1
						}
					}
				});
				Toast.showWithGravity('Presupuesto publicado!', Toast.LONG, Toast.TOP);
			})
		}
	}


	onChange (comment) {
		this.setState({comment});
	}

	render () {
		const {comment} = this.state;
		return (
			<Card title="Envia tu presupuesto">
				<View>
					<Form
						ref="form"
						type={Comment}
						options={options}
						value={comment}
						onChange={(v) => this.onChange(v)}
					/>
				</View>

				<AppButton
					bgColor="rgba(255, 38, 74, 0.9)"
					title="Publicar Presupuesto"
					action={this.addComment.bind(this)}
					iconName="comments"
					iconSize={30}
					iconColor="#fff"
				/>
				<AppButton
					bgColor="rgba(28, 25, 21, 0.7)"
					title="Volver"
					action={this.goHome.bind(this)}
					iconName="arrow-left"
					iconSize={30}
					iconColor="#fff"
				/>
			</Card>
		)
	}
}