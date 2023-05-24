import { blogCollectionReference } from '../../config/firebase.config';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import {
	ContainerNav,
	ContainerProfile,
	ContainerUlProfile,
	TitleMode
} from './styles';
import YourPosts from '../../components/your-posts/YourPosts';
import YourFav from '../../components/your-fav/YourFav';
import YourProfile from '../../components/your-profile/YourProfile';
import { onSnapshot } from 'firebase/firestore';
import { TABS } from '../../constants/tabs';

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	const [mode, setMode] = useState('posts');
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

	if (!currentUser) return <h1>Loading...</h1>;

	return (
		<ContainerProfile>
			<ContainerNav>
				<ContainerUlProfile>
					{TABS.map(tab => {
						return (
							<li key={tab.id}>
								<TitleMode
									onClick={() => setMode(tab.mode)}
									active={mode === tab.mode}
								>
									{tab.text}
								</TitleMode>
							</li>
						);
					})}
				</ContainerUlProfile>
			</ContainerNav>

			<div>
				{mode === 'posts' && <YourPosts posts={posts} mode={mode} />}
				{mode === 'favs' && <YourFav />}
				{mode === 'profile' && <YourProfile />}
			</div>
		</ContainerProfile>
	);
};

export default Profile;
