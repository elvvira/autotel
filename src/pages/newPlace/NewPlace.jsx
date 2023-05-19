import { useContext, useState } from 'react';
import {
	ButtonImage,
	ButtonPlace,
	ContainerImage,
	ContainerImages,
	ContainerInput,
	ContainerNewPlace,
	FormInformation,
	InputInfoPlace,
	InputInfoPrice,
	LabelFile,
	StyledInputPlace,
	StyledSelect,
	StylesInputFile
} from './styles';
import { AuthContext } from '../../contexts/Auth.context';
import { addDoc } from 'firebase/firestore';
import { blogCollectionReference, storage } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const NewPlace = () => {
	const navigate = useNavigate();

	const [newPlaceInfo, setNewPlaceInfo] = useState({
		img: '',
		location: '',
		type: '',
		size: '',
		price: '',
		interval: '',
		info: ''
	});
	const { currentUser } = useContext(AuthContext);
	const [photo, setPhoto] = useState('');

	return (
		<ContainerNewPlace>
			<h3>Sube aqui las fotos de tu plaza</h3>

			<FormInformation
				onSubmit={e => createPost(e, newPlaceInfo, currentUser, navigate)}
			>
				<ContainerImages>
					<StylesInputFile
						type='file'
						name=''
						id='myFile'
						multiple
						onChange={e =>
							handleLoadFile(
								e.target.files[0],
								setPhoto,
								newPlaceInfo,
								setNewPlaceInfo
							)
						}
					/>
					<LabelFile htmlFor='myFile'>Subir archivo</LabelFile>
					<ContainerImage src={photo} alt='' />
				</ContainerImages>
				<div>
					<ContainerInput>
						<label htmlFor=''>¿Donde se encuentra tu plaza?</label>
						<StyledInputPlace
							type='text'
							name=''
							id=''
							placeholder='ubicación...'
							onChange={e =>
								setNewPlaceInfo({
									...newPlaceInfo,
									location: e.target.value
								})
							}
						/>
					</ContainerInput>
					<ContainerInput>
						<label htmlFor=''>¿Para que vehículo es tu plaza?</label>
						<StyledInputPlace
							type='text'
							name=''
							id=''
							placeholder='moto, biplaza, furgoneta....'
							onChange={e =>
								setNewPlaceInfo({
									...newPlaceInfo,
									type: e.target.value
								})
							}
						/>
					</ContainerInput>
					<ContainerInput>
						<label htmlFor=''>¿Que tamaño tiene tu plaza?</label>
						<StyledInputPlace
							type='text'
							name=''
							id=''
							placeholder='m2...'
							onChange={e =>
								setNewPlaceInfo({
									...newPlaceInfo,
									size: e.target.value
								})
							}
						/>
					</ContainerInput>
					<ContainerInput>
						<label htmlFor=''>¿Que precio tiene tu plaza?</label>
						<div>
							<InputInfoPrice
								type='text'
								name=''
								id=''
								placeholder='$'
								onChange={e =>
									setNewPlaceInfo({
										...newPlaceInfo,
										price: e.target.value
									})
								}
							/>
							<StyledSelect
								name=''
								id=''
								onChange={e =>
									setNewPlaceInfo({
										...newPlaceInfo,
										interval: e.target.value
									})
								}
							>
								<option value=''>dia</option>
								<option value=''>hora</option>
							</StyledSelect>
						</div>
					</ContainerInput>
				</div>
				<div>
					<ContainerInput>
						<label htmlFor=''>Información sobre tú plaza</label>
						<InputInfoPlace
							type='text'
							name=''
							id=''
							placeholder='Lorem ipsum dolor sit amet...'
							onChange={e =>
								setNewPlaceInfo({
									...newPlaceInfo,
									info: e.target.value
								})
							}
						/>
					</ContainerInput>
				</div>
				<ButtonPlace>Subir plaza</ButtonPlace>
			</FormInformation>
		</ContainerNewPlace>
	);
};
const createPost = async (e, newPlaceInfo, currentUser, navigate) => {
	e.preventDefault();
	try {
		await addDoc(blogCollectionReference, {
			...newPlaceInfo,
			date: new Date().toLocaleString(),
			email: currentUser.email
		});
		navigate('/');
	} catch (err) {
		console.log(err);
	}
	e.target.reset();
};

const handleLoadFile = async (
	file,
	setPhoto,
	newPlaceInfo,
	setNewPlaceInfo
) => {
	const nameNoExtension = file.name.substring(0, file.name.indexOf('.'));
	console.log(nameNoExtension);
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, finalName);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
		console.log(upload);
		console.log(imageURL);
		setPhoto(imageURL);
		setNewPlaceInfo({
			...newPlaceInfo,
			img: imageURL
		});
	} catch (err) {
		console.log(err);
	}
};
export default NewPlace;
