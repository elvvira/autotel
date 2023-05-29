import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

// import { db } from '../../config/firebase.config';
import {
	ContainerYourPosts,
	ImageFooter,
	YourPostImg
} from '../your-posts/styles';
import {
	blogCollectionReference,
	usersCollectionReference
} from '../../config/firebase.config';
import { DeleteFav } from './styles';

const YourFav = () => {
	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const [favIcon, setFavIcon] = useState(false);
	if (!currentUser.favorites) return <h1>Loading...</h1>;

	useEffect(() => {
		if (!currentUser) return;
		getUserPosts(currentUser, setPosts);
	}, [currentUser]);

	return (
		<ContainerYourPosts>
			{posts.map(post => {
				return (
					<div key={post.id}>
						<YourPostImg src={post.img} alt='' />
						<ImageFooter>
							<div>
								<p>{post.location}</p>
								<p>{post.price}€/hora</p>
							</div>
							<DeleteFav
								onClick={() => {
									DeleteFavorites(currentUser, post.id);
									setFavIcon(!favIcon);
								}}
							>
								quitar
							</DeleteFav>
						</ImageFooter>
					</div>
				);
			})}
		</ContainerYourPosts>
	);
};

const getUserPosts = async (currentUser, setPosts) => {
	const documentRefs = currentUser.favorites.map(id =>
		doc(blogCollectionReference, id)
	);
	const documentSnapshots = await Promise.all(
		documentRefs.map(ref => getDoc(ref))
	);
	const documents = documentSnapshots.map(snapshot => ({
		id: snapshot.id,
		...snapshot.data()
	}));
	setPosts(documents);
};

const DeleteFavorites = async (currentUser, placeId) => {
	const postToUpdate = doc(usersCollectionReference, currentUser.uid);
	const favorites = currentUser.favorites;
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
export default YourFav;
