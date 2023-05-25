import { useContext, useEffect, useState } from 'react';
import {
	ContainerYourPosts,
	IconEdit,
	ImageFooter,
	YourPostImg
} from './styles';
import { AuthContext } from '../../contexts/Auth.context';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

const YourPosts = () => {
	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		if (!currentUser) return;
		getUserPosts(currentUser, setPosts);
	}, [currentUser]);

	console.log(posts);

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

							<IconEdit src='assets/icon-edit.svg' alt='' />
						</ImageFooter>
					</div>
				);
			})}
		</ContainerYourPosts>
	);
};
export default YourPosts;

const getUserPosts = async (currentUser, setPosts) => {
	const q = query(
		collection(db, 'places'),
		where('email', '==', currentUser.email)
	);
	const querySnapshot = await getDocs(q);
	const data = [];
	querySnapshot.forEach(doc => data.push(doc.data()));
	setPosts(data);
};