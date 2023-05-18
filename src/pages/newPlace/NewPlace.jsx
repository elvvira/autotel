import { useContext, useState } from 'react';
import {
	ButtonImage,
	ContainerImage,
	ContainerImages,
	ContainerInput,
	ContainerNewPlace,
	FormInformation,
	InputInfoPlace,
	StyledInputPlace
} from './styles';
import { AuthContext } from '../../contexts/Auth.context';
import { addDoc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const NewPlace = () => {
	const navigate = useNavigate();

	const [newPlaceInfo, setNewPlaceInfo] = useState({
		img: '',
		location: '',
		type: '',
		size: '',
		price: '',
		info: ''
	});
	const { currentUser } = useContext(AuthContext);

	return (
		<ContainerNewPlace>
			<h3>Sube aqui las fotos de tu plaza</h3>
			<ContainerImages>
				<ContainerImage>
					<ButtonImage>+</ButtonImage>
					<img src='' alt='' />
				</ContainerImage>
			</ContainerImages>

			<div>
				<FormInformation
					onSubmit={e => createPost(e, newPlaceInfo, currentUser, navigate)}
				>
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
							<StyledInputPlace
								type='text'
								name=''
								id=''
								placeholder='$/día'
								onChange={e =>
									setNewPlaceInfo({
										...newPlaceInfo,
										price: e.target.value
									})
								}
							/>
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
					<button>Subir plaza</button>
				</FormInformation>
			</div>
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
export default NewPlace;
