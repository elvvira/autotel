import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import { ButtonClose, ContainerCloseSesion } from './styles';

const YourProfile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	return (
		<div>
			<form>
				<div>
					<label htmlFor=''>nombre de usuari@</label>
					<input type='text' />
				</div>
				<div>
					<label htmlFor=''>email</label>
					<input type='text' />
				</div>
				<button>Actualizar usuario</button>
			</form>
			<ContainerCloseSesion>
				<p>¿Deseas cerrar sesión {currentUser.email}?</p>

				<ButtonClose onClick={() => handleSignOut(navigate)}>
					cerrar sesión
				</ButtonClose>
			</ContainerCloseSesion>
		</div>
	);
};
const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};
export default YourProfile;
