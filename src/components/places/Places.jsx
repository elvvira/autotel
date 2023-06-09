import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerImgPlaces, HeartIcon, ImagePost } from './styles';
import { AuthContext } from '../../contexts/Auth.context';
import { doc, updateDoc } from 'firebase/firestore';
import { usersCollectionReference } from '../../config/firebase.config';

const Places = ({ post }) => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const [favIcon, setFavIcon] = useState(false);

	const isFavorite = currentUser?.favorites?.includes(post.id);

	return (
		<div>
			<ContainerImgPlaces>
				<ImagePost
					onClick={() => navigate('Modal', { state: post })}
					src={post.img}
					alt=''
				/>
				{currentUser && (
					<HeartIcon
						onClick={() => {
							saveFavorites(currentUser, post.id);
							setFavIcon(!favIcon);
						}}
						src={
							isFavorite ? 'assets/heart-solid.svg' : 'assets/heart-regular.svg'
						}
						alt=''
					/>
				)}
			</ContainerImgPlaces>
			<div>
				<p>{post.location}</p>
				<p>{post.price}€/hora</p>
			</div>
		</div>
	);
};

const saveFavorites = async (currentUser, placeId) => {
	const postToUpdate = doc(usersCollectionReference, currentUser.uid);
	const favorites = currentUser.favorites;
	console.log('FAVOURITES', favorites);
	if (favorites.includes(placeId)) {
		const placeIndex = favorites.indexOf(placeId);
		favorites.splice(placeIndex, 1);
	} else {
		favorites.push(placeId);
	}
	console.log(favorites);
	const newData = {
		favorites: favorites
	};
	await updateDoc(postToUpdate, newData);
};

export default Places;
