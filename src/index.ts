import { InterfaceConfig } from '@directus/shared/types';
import InterfaceGroupModal from './interface.vue';

export default {
	id: 'extension-group-modal',
	name: '$t:interfaces.user.modes.modal',
	description: 'Group fields into modal dialog, accessible from a button',
	icon: 'web_asset',
	component: InterfaceGroupModal,
	hideLabel: true,
	hideLoader: true,
	types: ['alias'],
	localTypes: ['group'],
	group: 'group',
	options: (context) => [
		{
			field: 'layout',
			name: '$t:layout_setup',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'select-dropdown',
				default_value: 'modal',
				options: {
					choices: [
						{ text: '$t:interfaces.user.modes.modal', value: 'modal' },
						{ text: '$t:sidebar', value: 'sidebar' },
					],
				},
			},
			schema: {
				default_value: 'modal',
			},
		},
		{
			field: 'title',
			type: 'string',
			name: '$t:title',
			meta: {
				width: 'full',
				interface: 'system-display-template',
				required: true,
				options: {
					collectionName: context.collection,
					font: 'monospace',
					placeholder: '$t:interfaces.boolean.label_placeholder',
				},
			},
		},
		{
			field: 'headerIcon',
			name: '$t:interfaces.group-detail.header_icon',
			type: 'string',
			meta: {
				interface: 'select-icon',
				width: 'half',
			},
		},
		{
			field: 'headerColor',
			name: '$t:interfaces.group-detail.header_color',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'select-dropdown',
				default_value: '',
				options: {
					choices: [
						{ text: '$t:primary', value: 'primary' },
						{ text: '$t:normal', value: 'secondary' },
						{ text: '$t:info', value: 'info' },
						{ text: '$t:success', value: 'success' },
						{ text: '$t:warning', value: 'warning' },
						{ text: '$t:danger', value: 'danger' },
					],
				},
			},
			schema: {
				default_value: '',
			},
		},
	],
} as InterfaceConfig;
