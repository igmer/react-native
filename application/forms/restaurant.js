import React from 'react';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import sliderTemplate from './templates/slider';

export const Restaurant = t.struct({
	name: t.String,
	category:t.enums({
		'AL':'Construccion',
		'PN':'Pintura',
		'RE':'Reparacion'
	},'Categoria'),
	address: t.String,
	capacity: t.Number,
	description: t.String,
	estado: t.maybe(t.Number),

});

export const options = {
	fields: {
		name: {
			label: 'Titulo(*)',
			placeholder: 'Mi proyecto trata sobre'
		},
		address: {
			label: 'Dirección (*)',
			placeholder: 'Dirección'
		},
		capacity: {
			label: 'Presupuesto ($ USD)',
			help: 'Presupuesto disponible',
			config: {
				step: 5,
				min: 5,
				max: 5000
			},
			//template: sliderTemplate
		},
		description: {
			label: 'Detalle (*)',
			placeholder: 'Detalle de la solicitud',
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
		},
		estado:{
			hidden:true

		}
	}
};