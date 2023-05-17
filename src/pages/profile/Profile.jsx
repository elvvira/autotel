import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Profile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	return (
		<div>
			<p>
				{' '}
				¿seguro que quieres cerrar seseión <br /> en {currentUser.email}?
			</p>
			<div>
				<button onClick={() => handleSignOut(navigate)}>cerrar sesion</button>
			</div>
		</div>
	);
};

const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};
export default Profile;
