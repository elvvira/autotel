import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import {
	ButtonClose,
	ButtonPatch,
	ContainerCloseSesion,
	ContainerInputProfile,
	ContainerLeftProfile,
	ContainerPhotoProfile,
	ContianerYourProfile,
	StyledFormProfile,
	StyledInputProfile
} from './styles';
import { auth } from '../../config/firebase.config';

const YourProfile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	return (
		<div>
			<ContianerYourProfile>
				<ContainerLeftProfile>
					<h2>Anfitrión ...</h2>

					<ContainerPhotoProfile src='' alt='' />
					<button>Subir una foto</button>
				</ContainerLeftProfile>
				<StyledFormProfile>
					<h3>Actualizar usuario</h3>
					<ContainerInputProfile>
						<label htmlFor=''>Nombre de usuari@</label>
						<StyledInputProfile type='text' />
					</ContainerInputProfile>
					<ContainerInputProfile>
						<label htmlFor=''>Cambiar contraseña</label>
						<StyledInputProfile type='text' />
					</ContainerInputProfile>
					<ContainerInputProfile>
						<label htmlFor=''>Inforamción sobre mi</label>
						<StyledInputProfile type='text' />
					</ContainerInputProfile>
					<ButtonPatch>Actualizar usuario</ButtonPatch>
				</StyledFormProfile>
			</ContianerYourProfile>
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
