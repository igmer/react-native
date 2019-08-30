import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import sliderTemplate from './templates/slider';

export const Comment = t.struct({
	rating: t.Number,
	comment: t.String
});

export const options = {
	fields: {
		rating: {
			label: 'Presupuesto $ USD ',
			help: '¿En cuanto calculas tu presupuesto?',

		},
		comment: {
			label: 'Comentarios',
			placeholder: 'Agrega tus comentarios',
			multiline: true,
			stylesheet: {
				...Form.stylesheet,
				textbox: {
					...Form.stylesheet.textbox,
					normal: {
						...Form.stylesheet.textbox.normal,
						height: 150
					},
					error: {
						...Form.stylesheet.textbox.error,
						height: 150
					}
				}
			}
		}
	}
}