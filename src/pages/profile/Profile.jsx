import { useNavigate } from 'react-router-dom';
import { auth, blogCollectionReference } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import {
	ButtonClose,
	ContainerCloseSesion,
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
	const navigate = useNavigate();
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

			<ContainerCloseSesion>
				<p>¿Deseas cerrar sesión {currentUser.email}?</p>

				<ButtonClose onClick={() => handleSignOut(navigate)}>
					cerrar sesión
				</ButtonClose>
			</ContainerCloseSesion>
		</ContainerProfile>
	);
};

const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};
export default Profile;
