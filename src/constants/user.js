import { v4 } from 'uuid';

export const USER_FORM = [
	{
		id: v4(),
		text: 'Nombre de usuario',
		input: 'userName'
	},
	{
		id: v4(),
		text: 'Información sobre mi',
		input: 'userInfo'
	}
];
