import { NavLink, useNavigate } from 'react-router-dom';
import { auth, blogCollectionReference } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import {
	ButtonClose,
	ContainerCloseSesion,
	ContainerNav,
	ContainerProfile,
	ContainerUlProfile
} from './styles';
import { doc, onSnapshot } from 'firebase/firestore';

const Profile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	// const [post, setPost] = useState([]);
	// useEffect(() => {
	// 	const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
	// 		const dataInfo = snapshot.docs.map(doc => ({
	// 			...doc.data(),
	// 			id: doc.id
	// 		}));
	// 		dataInfo.length === 0 ? setPost(null) : setPost(dataInfo);
	// 	});
	// 	return () => subscribeToData();
	// }, []);

	// console.log(currentUser.displayName);

	return (
		<ContainerProfile>
			<ContainerNav>
				<ContainerUlProfile>
					<li>
						<NavLink>Tus anuncios</NavLink>
					</li>
					<li>
						<NavLink>Tus favoritos</NavLink>
					</li>
					<li>
						<NavLink>Perfil</NavLink>
					</li>
				</ContainerUlProfile>
			</ContainerNav>
			<div>
				<div>
					<label htmlFor=''>nombre de usuari@</label>
					<input type='text' />
				</div>
			</div>
			<div></div>
			<ContainerCloseSesion>
				<p>
					¿Deseas cerrar sesión <br /> {currentUser.displayName}?
				</p>

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
