import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where
} from 'firebase/firestore';

import { db } from '../../config/firebase.config';
import {
	ContainerYourPosts,
	ImageFooter,
	YourPostImg
} from '../your-posts/styles';
import { blogCollectionReference } from '../../config/firebase.config';

const YourFav = () => {
	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(AuthContext);

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

export default YourFav;
