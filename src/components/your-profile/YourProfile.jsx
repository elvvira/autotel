import { signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
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
	InputPhotoUser,
	LabelPhotoUser,
	StyledFormProfile,
	StyledInputProfile
} from './styles';
import { auth, storage } from '../../config/firebase.config';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const YourProfile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const [userPhoto, setUserPhoto] = useState();
	return (
		<div>
			<ContianerYourProfile>
				<ContainerLeftProfile>
					<h2>Anfitrión ...</h2>
					<InputPhotoUser
						type='file'
						id='myUserFile'
						multiple
						onChange={e => handleLoadFile(e.target.files[0], setUserPhoto)}
					/>
					<ContainerPhotoProfile src={userPhoto} alt='' />
					<LabelPhotoUser htmlFor='myUserFile'>Subir una foto</LabelPhotoUser>
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
						<label htmlFor=''>Información sobre mi</label>
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

const handleLoadFile = async (file, setUserPhoto) => {
	const nameNoExtension = file.name.substring(0, file.name.indexOf('.'));
	console.log(nameNoExtension);
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, finalName);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
		console.log(upload);
		console.log(imageURL);
		setUserPhoto(imageURL);
		// setNewPlaceInfo({
		// 	...newPlaceInfo,
		// 	img: imageURL
		// });
	} catch (err) {
		console.log(err);
	}
};
export default YourProfile;
