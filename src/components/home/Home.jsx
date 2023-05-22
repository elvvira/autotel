import { useEffect, useState } from 'react';
import Places from '../places/Places';
import Search from '../search/Search';
import { ContainerHome, ContainerPlaces } from './styles';
import { doc, onSnapshot } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';

const Home = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}));
			dataInfo.length === 0 ? setPosts(null) : setPosts(dataInfo);
		});
		return () => subscribeToData();
	}, []);
	console.log(posts);

	return (
		<ContainerHome>
			<Search />
			<ContainerPlaces>
				{posts.map(post => {
					return <Places key={post.id} post={post} />;
				})}
			</ContainerPlaces>
		</ContainerHome>
	);
};

export default Home;
