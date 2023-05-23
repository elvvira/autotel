import { v4 } from 'uuid';

export const TABS = [
	{
		id: v4(),
		text: 'Tus anuncios',
		mode: 'posts'
	},
	{
		id: v4(),
		text: 'Tus favoritos',
		mode: 'favs'
	},
	{
		id: v4(),
		text: 'Perfil',
		mode: 'profile'
	}
];
