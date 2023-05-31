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
import {
	auth,
	storage,
	usersCollectionReference
} from '../../config/firebase.config';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { USER_FORM } from '../../constants/user';
import { doc, updateDoc } from 'firebase/firestore';

const YourProfile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const [userInfo, setUserInfo] = useState({
		userPhoto: '',
		userName: '',
		userInfo: ''
	});
	console.log(currentUser.userPhoto);
	return (
		<div>
			<ContianerYourProfile>
				<ContainerLeftProfile>
					<h2>Anfitrión {userInfo.userName} </h2>
					<InputPhotoUser
						type='file'
						id='myUserFile'
						name='UserPhoto'
						multiple
						onChange={e =>
							handleLoadFile(e.target.files[0], userInfo, setUserInfo)
						}
					/>
					<ContainerPhotoProfile
						src={
							currentUser.userPhoto ? currentUser.userPhoto : userInfo.userPhoto
						}
						alt=''
					/>
					<LabelPhotoUser htmlFor='myUserFile'>Subir una foto</LabelPhotoUser>
				</ContainerLeftProfile>
				<StyledFormProfile>
					<h3>Actualizar usuario</h3>
					{USER_FORM.map(info => {
						return (
							<ContainerInputProfile key={info.id}>
								<label htmlFor=''>{info.text}</label>
								<StyledInputProfile
									type='text'
									name={info.input}
									placeholder={info.input}
									onChange={e =>
										handleChangeInput(e.target, userInfo, setUserInfo)
									}
								/>
							</ContainerInputProfile>
						);
					})}

					<ButtonPatch
						onClick={e => editUser(e, currentUser.uid, userInfo, navigate)}
					>
						Actualizar usuario
					</ButtonPatch>
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

const handleChangeInput = (input, userInfo, setUserInfo) => {
	const { value, name } = input;
	setUserInfo({
		...userInfo,
		[name]: value
	});
};
const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};

const handleLoadFile = async (file, userInfo, setUserInfo) => {
	console.log(file);
	const nameNoExtension = file.name.substring(0, file.name.indexOf('.'));
	// console.log(nameNoExtension);
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, finalName);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);

		setUserInfo({
			...userInfo,
			userPhoto: imageURL
		});
	} catch (err) {
		console.log(err);
	}
};

const editUser = async (e, id, userInfo, navigate) => {
	e.preventDefault();

	try {
		const postToUpdate = doc(usersCollectionReference, id);
		await updateDoc(postToUpdate, userInfo);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
};
export default YourProfile;
