import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { ContainerProfile } from './styles';

const Profile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	return (
		<ContainerProfile>
			<div>
				<div>
					<label htmlFor=''>nombre de usuari@</label>
					<input type='text' />
				</div>
			</div>
			<div>
				<p>
					¿seguro que quieres cerrar sesión <br /> en {currentUser.email}?
				</p>
				<div>
					<button onClick={() => handleSignOut(navigate)}>cerrar sesion</button>
				</div>
			</div>
		</ContainerProfile>
	);
};

const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};
export default Profile;
